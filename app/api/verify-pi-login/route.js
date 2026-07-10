import { getPiApiBase } from "@/lib/pi-config"

const PI_ME_ENDPOINT = `${getPiApiBase()}/me`

export async function POST(request) {
  let body

  try {
    body = await request.json()
  } catch {
    return Response.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    )
  }

  const { accessToken } = body

  if (!accessToken || typeof accessToken !== "string") {
    return Response.json(
      { success: false, error: "Missing or invalid accessToken." },
      { status: 400 }
    )
  }

  try {
    const piResponse = await fetch(PI_ME_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
      cache: "no-store",
    })

    if (!piResponse.ok) {
      const errorText = await piResponse.text().catch(() => "")
      return Response.json(
        {
          success: false,
          error: "Pi token verification failed.",
          status: piResponse.status,
          details: errorText || undefined,
        },
        { status: 401 }
      )
    }

    const user = await piResponse.json()

    return Response.json({ success: true, user })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown server error."
    return Response.json(
      { success: false, error: "Verification pipeline error.", details: message },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}
