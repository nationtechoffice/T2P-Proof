"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"
import { ShieldCheck, Globe2, Users, Rocket, Activity, ArrowUpRight, Fingerprint } from "lucide-react"

interface GeoFeature {
  type: string
  geometry: any
  properties: any
}

function interpolateProjection(raw0: any, raw1: any) {
  const mutate: any = d3.geoProjectionMutator((t: number) => (x: number, y: number) => {
    const [x0, y0] = raw0(x, y)
    const [x1, y1] = raw1(x, y)
    return [x0 + t * (x1 - x0), y0 + t * (y1 - y0)]
  })
  let t = 0
  return Object.assign((mutate as any)(t), {
    alpha(_: number) {
      return arguments.length ? (mutate as any)((t = +_)) : t
    },
  })
}

const PROJECTS = [
  { rank: 1, name: "AuroraPay", ticker: "AURA", region: "Global", humans: "1.2M", status: "Live", trust: 98 },
  { rank: 2, name: "NimbusID", ticker: "NMB", region: "APAC", humans: "842K", status: "Live", trust: 95 },
  { rank: 3, name: "VerdantDAO", ticker: "VRD", region: "EMEA", humans: "610K", status: "Launching", trust: 91 },
  { rank: 4, name: "SolaceGrid", ticker: "SOL2", region: "Americas", humans: "497K", status: "Live", trust: 89 },
  { rank: 5, name: "HeliosMint", ticker: "HLS", region: "Global", humans: "355K", status: "Launching", trust: 86 },
  { rank: 6, name: "OrbitKey", ticker: "ORB", region: "APAC", humans: "284K", status: "Presale", trust: 82 },
]

const STATS = [
  { label: "Verified Humans", value: "3.9M+", icon: Users },
  { label: "Bots Blocked", value: "128M", icon: ShieldCheck },
  { label: "Live Gateways", value: "214", icon: Globe2 },
  { label: "Projects Launched", value: "1,480", icon: Rocket },
]

export function T2PGateway() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [worldData, setWorldData] = useState<GeoFeature[]>([])
  const [progress, setProgress] = useState(0) // 0 = globe, 100 = flat map
  const [rotation, setRotation] = useState<[number, number]>([0, -18])
  const [revealed, setRevealed] = useState(false)
  const [morphing, setMorphing] = useState(false)

  const width = 960
  const height = 540

  const progressRef = useRef(progress)
  const morphingRef = useRef(morphing)
  const revealedRef = useRef(revealed)
  progressRef.current = progress
  morphingRef.current = morphing
  revealedRef.current = revealed

  // Load world topology
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        const world: any = await res.json()
        const countries = (feature(world, world.objects.countries) as any).features
        setWorldData(countries as GeoFeature[])
      } catch (e) {
        console.log("[v0] Error loading world data:", e)
      }
    }
    load()
  }, [])

  // Auto-spin while in globe mode
  useEffect(() => {
    let raf = 0
    const tick = () => {
      if (progressRef.current === 0 && !morphingRef.current) {
        setRotation((prev) => [(prev[0] + 0.22) % 360, prev[1]])
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Render globe / map
  useEffect(() => {
    if (!svgRef.current || worldData.length === 0) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    // defs: neon glow filter + ocean gradient
    const defs = svg.append("defs")
    const glow = defs.append("filter").attr("id", "neonGlow").attr("x", "-50%").attr("y", "-50%").attr("width", "200%").attr("height", "200%")
    glow.append("feGaussianBlur").attr("stdDeviation", "2.2").attr("result", "blur")
    const merge = glow.append("feMerge")
    merge.append("feMergeNode").attr("in", "blur")
    merge.append("feMergeNode").attr("in", "SourceGraphic")

    const oceanGrad = defs.append("radialGradient").attr("id", "ocean").attr("cx", "50%").attr("cy", "45%").attr("r", "60%")
    oceanGrad.append("stop").attr("offset", "0%").attr("stop-color", "#0b1f3a")
    oceanGrad.append("stop").attr("offset", "70%").attr("stop-color", "#081327")
    oceanGrad.append("stop").attr("offset", "100%").attr("stop-color", "#060913")

    const t = progress / 100
    const alpha = Math.pow(t, 0.5)

    const scale = d3.scaleLinear().domain([0, 1]).range([230, 150])

    const projection = interpolateProjection(d3.geoOrthographicRaw, d3.geoEquirectangularRaw)
      .scale(scale(alpha))
      .translate([width / 2, height / 2])
      .rotate([rotation[0], rotation[1]])
      .precision(0.1)
    projection.alpha(alpha)

    const path = d3.geoPath(projection)

    // Sphere fill (ocean)
    try {
      const sphere = path({ type: "Sphere" } as any)
      if (sphere) {
        svg
          .append("path")
          .datum({ type: "Sphere" } as any)
          .attr("d", sphere)
          .attr("fill", "url(#ocean)")
          .attr("stroke", "none")
          .attr("opacity", 1 - t * 0.55)
      }
    } catch {}

    // Graticule wireframe
    try {
      const graticule = d3.geoGraticule().step([15, 15])
      const gp = path(graticule())
      if (gp) {
        svg
          .append("path")
          .datum(graticule())
          .attr("d", gp)
          .attr("fill", "none")
          .attr("stroke", "#38bdf8")
          .attr("stroke-width", 0.5)
          .attr("opacity", 0.28)
      }
    } catch {}

    // Countries
    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d) => {
        try {
          const s = path(d as any)
          if (!s || s.includes("NaN") || s.includes("Infinity")) return ""
          return s
        } catch {
          return ""
        }
      })
      .attr("fill", "#0ea5e9")
      .attr("fill-opacity", 0.06)
      .attr("stroke", "#22d3ee")
      .attr("stroke-width", 0.8)
      .attr("stroke-opacity", 0.85)
      .attr("filter", "url(#neonGlow)")
      .style("visibility", function () {
        const d = d3.select(this).attr("d")
        return d && d.length > 0 && !d.includes("NaN") ? "visible" : "hidden"
      })

    // Sphere outline on top
    try {
      const outline = path({ type: "Sphere" } as any)
      if (outline) {
        svg
          .append("path")
          .datum({ type: "Sphere" } as any)
          .attr("d", outline)
          .attr("fill", "none")
          .attr("stroke", "#38bdf8")
          .attr("stroke-width", 1.2)
          .attr("opacity", (1 - t) * 0.9)
          .attr("filter", "url(#neonGlow)")
      }
    } catch {}
  }, [worldData, progress, rotation])

  const runMorph = useCallback(() => {
    if (morphingRef.current || progressRef.current !== 0) return
    setMorphing(true)
    const duration = 2200
    const start = performance.now()
    const animate = (now: number) => {
      const raw = Math.min((now - start) / duration, 1)
      const eased = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2
      setProgress(eased * 100)
      if (raw < 1) {
        requestAnimationFrame(animate)
      } else {
        setProgress(100)
        setMorphing(false)
        setRevealed(true)
      }
    }
    requestAnimationFrame(animate)
  }, [])

  const resetToGlobe = useCallback(() => {
    if (morphingRef.current) return
    setRevealed(false)
    const duration = 1600
    const start = performance.now()
    const from = progressRef.current
    setMorphing(true)
    const animate = (now: number) => {
      const raw = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - raw, 3)
      setProgress(from * (1 - eased))
      if (raw < 1) {
        requestAnimationFrame(animate)
      } else {
        setProgress(0)
        setMorphing(false)
      }
    }
    requestAnimationFrame(animate)
  }, [])

  return (
    <div className="relative w-full">
      {/* Stage */}
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px]" />
        </div>

        <button
          type="button"
          onClick={runMorph}
          disabled={progress !== 0 || morphing}
          aria-label="Activate global identity map"
          className="group relative block w-full cursor-pointer disabled:cursor-default"
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid meet"
            className="mx-auto h-auto w-full max-w-4xl select-none"
          />
          {progress === 0 && !morphing && (
            <span className="absolute left-1/2 top-[calc(50%+150px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-sky-400/40 bg-[#0d1326]/80 px-4 py-2 text-xs font-medium tracking-wide text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] backdrop-blur transition-all group-hover:border-sky-300 group-hover:text-sky-200 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.45)]">
              Click the globe to open the Identity Network
            </span>
          )}
        </button>
      </div>

      {/* Revealed dashboard */}
      <div
        className={`mx-auto mt-8 w-full max-w-6xl px-4 transition-all duration-700 ${
          revealed ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
        aria-hidden={!revealed}
      >
        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="rounded-xl border border-[#1e293b] bg-[#0d1326] p-4 shadow-[0_0_0_1px_rgba(56,189,248,0.03)] transition-colors hover:border-sky-500/50"
              >
                <div className="flex items-center gap-2 text-sky-400">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{s.label}</span>
                </div>
                <p className="mt-3 text-2xl font-semibold text-white">{s.value}</p>
              </div>
            )
          })}
        </div>

        {/* Table + auth */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Launch directory */}
          <div className="lg:col-span-2 overflow-hidden rounded-xl border border-[#1e293b] bg-[#0d1326]">
            <div className="flex items-center justify-between border-b border-[#1e293b] px-5 py-4">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-sky-400" aria-hidden="true" />
                <h2 className="text-sm font-semibold text-white">Project Launch Directory</h2>
              </div>
              <span className="text-xs text-slate-500">Real-time</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-slate-500">
                    <th className="px-5 py-3 font-medium">#</th>
                    <th className="px-5 py-3 font-medium">Project</th>
                    <th className="px-5 py-3 font-medium">Region</th>
                    <th className="px-5 py-3 font-medium">Verified</th>
                    <th className="px-5 py-3 font-medium">Trust</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e293b]">
                  {PROJECTS.map((p) => (
                    <tr key={p.ticker} className="transition-colors hover:bg-sky-500/5">
                      <td className="px-5 py-3 text-slate-500">{p.rank}</td>
                      <td className="px-5 py-3">
                        <div className="font-medium text-white">{p.name}</div>
                        <div className="text-xs text-sky-400">${p.ticker}</div>
                      </td>
                      <td className="px-5 py-3 text-slate-300">{p.region}</td>
                      <td className="px-5 py-3 text-slate-300">{p.humans}</td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#1e293b]">
                            <div
                              className="h-full rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                              style={{ width: `${p.trust}%` }}
                            />
                          </div>
                          <span className="text-xs text-slate-400">{p.trust}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                            p.status === "Live"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : p.status === "Launching"
                                ? "bg-sky-500/10 text-sky-400"
                                : "bg-amber-500/10 text-amber-400"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pi auth block */}
          <div className="flex flex-col rounded-xl border border-[#1e293b] bg-[#0d1326] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-500/40 bg-sky-500/10 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              <Fingerprint className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-white text-balance">Secure Pi SDK Authentication</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Prove you are a unique human through an un-bottable identity gateway. No passwords, no bots, no
              duplicates.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sky-400" aria-hidden="true" /> Sybil-resistant verification
              </li>
              <li className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-sky-400" aria-hidden="true" /> Cross-chain identity passport
              </li>
            </ul>
            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-3 text-sm font-semibold text-[#060913] shadow-[0_0_24px_rgba(56,189,248,0.45)] transition-all hover:bg-sky-400 hover:shadow-[0_0_32px_rgba(56,189,248,0.65)]"
            >
              Verify with Pi
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={resetToGlobe}
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-[#1e293b] px-4 py-2.5 text-xs font-medium text-slate-400 transition-colors hover:border-sky-500/40 hover:text-sky-300"
            >
              Return to globe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
