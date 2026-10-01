export interface NeighborhoodSpot {
  name: string;
  body: string;
  links: { href: string; label: string }[];
}

/** Tampa city-hub blocks. Copy is specific to /locations/tampa. */
export const tampaLocationSpots: NeighborhoodSpot[] = [
  {
    name: "Hyde Park",
    body: "Hyde Park jobs are usually inside older South Tampa houses along Bayshore, Swann, and South Howard: a TV mount in a formal living room, a drywall blend next to plaster, or a sticking door after a humid week. We protect floors and keep the visit quiet. These are service calls from our only Westchase headquarters, not a Hyde Park storefront.",
    links: [
      { href: "/handyman-south-tampa-fl", label: "South Tampa handyman" },
      { href: "/services/tv-wall-mounting", label: "TV wall mounting" },
      { href: "/services/drywall-repair", label: "Drywall repair" },
    ],
  },
  {
    name: "Seminole Heights",
    body: "Seminole Heights bungalows along Florida Avenue, Nebraska, and the Hillsborough River side need a different touch than new stucco subdivisions. We plane swollen doors, patch drywall after a remodel, and hang fixtures into mixed wood framing. When the list continues east or north, we use the Temple Terrace and Carrollwood hubs from the same licensed crew.",
    links: [
      { href: "/locations/temple-terrace", label: "Handyman Temple Terrace" },
      { href: "/locations/carrollwood", label: "Handyman Carrollwood" },
      { href: "/services/door-repair", label: "Door repair" },
    ],
  },
  {
    name: "New Tampa",
    body: "New Tampa means Tampa Palms, Hunter's Green, Cross Creek, and West Meadows HOA lists: ceiling fans, paint-ready drywall, and a short fence-board repair after a summer storm. The truck still leaves Westchase. North of here the same route continues into Lutz, Wesley Chapel, and Land O' Lakes.",
    links: [
      { href: "/locations/lutz", label: "Handyman Lutz" },
      { href: "/locations/wesley-chapel", label: "Handyman Wesley Chapel" },
      { href: "/locations/land-o-lakes", label: "Handyman Land O' Lakes" },
    ],
  },
  {
    name: "Carrollwood",
    body: "Carrollwood Village, Northdale, and the Gunn Highway side are a short hop from headquarters. Homeowners book ceiling-fan swaps, punch lists, and fence-gate fixes. Carrollwood is a service area with its own page so the copy stays local — still one phone number and one Westchase address.",
    links: [
      { href: "/locations/carrollwood", label: "Carrollwood handyman hub" },
      { href: "/locations/citrus-park-fl", label: "Handyman Citrus Park" },
      { href: "/services/handyman/fan-installation", label: "Ceiling fan installation" },
    ],
  },
];

/** South Tampa landing blocks. Different sentences from the Tampa hub. */
export const southTampaSpots: NeighborhoodSpot[] = [
  {
    name: "Hyde Park",
    body: "On a Hyde Park visit we plan for narrow drives, original trim, and living rooms where the cables have to disappear. Shoe covers stay on, and a TV mount is lagged into structure rather than guessed through plaster. If the address is actually farther up Bayshore or in Beach Park, this South Tampa page is still the right handyman hub.",
    links: [
      { href: "/locations/tampa#hyde-park", label: "Hyde Park on the Tampa hub" },
      { href: "/services/tv-wall-mounting", label: "TV wall mounting in Tampa" },
      { href: "/services/drywall-repair", label: "Drywall repair in Tampa" },
    ],
  },
  {
    name: "Seminole Heights",
    body: "Seminole Heights is not South Tampa, and we do not pretend it is. When a Heights bungalow is on the same day as a Hyde Park punch list, the Westchase crew continues north for door planing, picture hanging, and drywall that has to blend with older walls. Temple Terrace is the next eastbound stop when the job crosses the river side.",
    links: [
      { href: "/locations/tampa#seminole-heights", label: "Seminole Heights on the Tampa hub" },
      { href: "/locations/temple-terrace", label: "Handyman Temple Terrace" },
      { href: "/services/door-repair", label: "Door repair" },
    ],
  },
  {
    name: "New Tampa",
    body: "New Tampa houses are newer, taller, and HOA-driven compared with Hyde Park cottages. A South Tampa booking does not turn into a New Tampa office. If the fan, drywall patch, or fence board is in Tampa Palms or Hunter's Green, we schedule it on the north route with Lutz and Wesley Chapel.",
    links: [
      { href: "/locations/lutz", label: "Handyman Lutz" },
      { href: "/locations/wesley-chapel", label: "Handyman Wesley Chapel" },
      { href: "/locations/tampa#new-tampa", label: "New Tampa on the Tampa hub" },
    ],
  },
  {
    name: "Carrollwood",
    body: "Carrollwood sits north of our Westchase headquarters, closer than Hyde Park on many days. Ceiling fans, hardware, and backyard gate adjustments are the usual Carrollwood list. Use the Carrollwood hub for that neighborhood instead of stretching this South Tampa page over north Tampa.",
    links: [
      { href: "/locations/carrollwood", label: "Carrollwood handyman hub" },
      { href: "/services/handyman/fan-installation", label: "Ceiling fan installation" },
      { href: "/services/fence-handyman", label: "Fence handyman" },
    ],
  },
];

export const moneyNeighborhoodSpots: Record<string, NeighborhoodSpot[]> = {
  "drywall-repair": [
    {
      name: "Hyde Park",
      body: "Hyde Park drywall is often a small, visible patch: a doorknob hole in a hallway, a crack where plaster meets board, or a texture that has to disappear under paint. We feather wider than the hole so the repair does not telegraph in raking light from Bayshore windows.",
      links: [
        { href: "/handyman-south-tampa-fl", label: "South Tampa handyman" },
        { href: "/locations/tampa#hyde-park", label: "Hyde Park handyman notes" },
      ],
    },
    {
      name: "Seminole Heights",
      body: "Seminole Heights walls vary house to house — original plaster next to a later drywall addition. We do not skim an entire bungalow on a patch visit. The job is a sound patch, tape, and a texture that matches the room you are actually looking at.",
      links: [
        { href: "/locations/tampa#seminole-heights", label: "Seminole Heights on the Tampa page" },
        { href: "/locations/temple-terrace", label: "Temple Terrace handyman" },
      ],
    },
    {
      name: "New Tampa",
      body: "New Tampa drywall is usually orange peel or a light knockdown in Tampa Palms and Hunter's Green. We cut a clean opening, add backing when the hole is large, and leave the wall paint-ready. North of the neighborhood, Lutz and Wesley Chapel homes use the same finish habits.",
      links: [
        { href: "/locations/lutz", label: "Handyman Lutz" },
        { href: "/locations/wesley-chapel", label: "Handyman Wesley Chapel" },
      ],
    },
    {
      name: "Carrollwood",
      body: "Carrollwood drywall calls are family-house damage: furniture moves, TV remounts, and bathroom fans that left a messy cutout. Because Carrollwood is close to Westchase, a small patch is often same-week. The Carrollwood hub covers the rest of the punch list.",
      links: [
        { href: "/locations/carrollwood", label: "Carrollwood handyman hub" },
        { href: "/locations/citrus-park-fl", label: "Citrus Park handyman" },
      ],
    },
  ],
  "tv-wall-mounting": [
    {
      name: "Hyde Park",
      body: "Hyde Park TV mounts often go over a fireplace or onto a plaster-and-lath wall that will not hold a guess. We confirm structure, use a rated mount, and hide cables only when the wall and the code allow it. South Tampa scheduling stays discreet.",
      links: [
        { href: "/handyman-south-tampa-fl", label: "South Tampa handyman" },
        { href: "/locations/tampa#hyde-park", label: "Hyde Park coverage" },
      ],
    },
    {
      name: "Seminole Heights",
      body: "Seminole Heights living rooms are smaller and the studs are not always where a new build would put them. We locate real backing before the bracket goes up, then level the screen for the sofa you already own. A Heights visit can pair with a Temple Terrace stop the same day.",
      links: [
        { href: "/locations/tampa#seminole-heights", label: "Seminole Heights coverage" },
        { href: "/locations/temple-terrace", label: "Temple Terrace handyman" },
      ],
    },
    {
      name: "New Tampa",
      body: "New Tampa great rooms in Tampa Palms and Cross Creek take larger screens and sometimes a soundbar on the same visit. Block walls and high ceilings change the hardware. If the mount is actually in Lutz or Wesley Chapel, those city hubs are the closer match.",
      links: [
        { href: "/locations/lutz", label: "Handyman Lutz" },
        { href: "/locations/wesley-chapel", label: "Handyman Wesley Chapel" },
      ],
    },
    {
      name: "Carrollwood",
      body: "Carrollwood TV mounting is a frequent add-on to a fan or shelf visit along Dale Mabry and Ehrlich. We bring the mount hardware, find the studs, and leave a clean canopy. Book it from the Carrollwood page when that is the only neighborhood on the list.",
      links: [
        { href: "/locations/carrollwood", label: "Carrollwood handyman hub" },
        { href: "/services/handyman/fan-installation", label: "Ceiling fan installation" },
      ],
    },
  ],
  "same-day-handyman": [
    {
      name: "Hyde Park",
      body: "Same-day Hyde Park windows depend on the cross-town drive from Westchase. A single TV mount or a sticking door can fit when the afternoon route is already south. A long punch list is scheduled, not forced into a leftover hour.",
      links: [
        { href: "/handyman-south-tampa-fl", label: "South Tampa handyman" },
        { href: "/locations/tampa#hyde-park", label: "Hyde Park on the Tampa hub" },
      ],
    },
    {
      name: "Seminole Heights",
      body: "Seminole Heights is a realistic same-day add when we are already between Westchase and east Tampa. Door adjustments, a drywall nick, and a fixture swap fit. Larger rotten-wood repairs wait for a planned visit, including Temple Terrace when that is the address.",
      links: [
        { href: "/locations/tampa#seminole-heights", label: "Seminole Heights coverage" },
        { href: "/locations/temple-terrace", label: "Temple Terrace handyman" },
      ],
    },
    {
      name: "New Tampa",
      body: "New Tampa same-day service is most likely when the truck is already north — Lutz, Wesley Chapel, or Land O' Lakes — not when the only open slot is a South Tampa job. Call and we will say which window is real.",
      links: [
        { href: "/locations/lutz", label: "Handyman Lutz" },
        { href: "/locations/wesley-chapel", label: "Handyman Wesley Chapel" },
        { href: "/locations/land-o-lakes", label: "Handyman Land O' Lakes" },
      ],
    },
    {
      name: "Carrollwood",
      body: "Carrollwood is one of the faster same-day reaches because it sits next to our Westchase headquarters. Fans, drywall nicks, furniture assembly, and a gate that will not latch are the jobs that usually fit today.",
      links: [
        { href: "/locations/carrollwood", label: "Carrollwood handyman hub" },
        { href: "/locations/westchase-fl", label: "Westchase headquarters" },
      ],
    },
  ],
  "fence-handyman": [
    {
      name: "Hyde Park",
      body: "Hyde Park fencing is usually a garden gate, a short wood section, or a leaning picket — not a subdivision privacy run. We repair what is there. A full property fence bid is a different conversation, and we will say so before anyone digs.",
      links: [
        { href: "/handyman-south-tampa-fl", label: "South Tampa handyman" },
        { href: "/locations/tampa#hyde-park", label: "Hyde Park coverage" },
      ],
    },
    {
      name: "Seminole Heights",
      body: "Seminole Heights yards often have older wood or chain-link that has racked out of square. A fence handyman visit resets a gate, replaces a few pickets, or tightens hardware. Long commercial runs are outside this page.",
      links: [
        { href: "/locations/tampa#seminole-heights", label: "Seminole Heights coverage" },
        { href: "/locations/temple-terrace", label: "Temple Terrace fence handyman notes" },
      ],
    },
    {
      name: "New Tampa",
      body: "New Tampa HOA fences in Tampa Palms and Hunter's Green fail one section at a time after storms. We match the existing board or vinyl panel when a piece is available and straighten the gate. Lutz and Wesley Chapel yards are the same kind of handyman fence repair.",
      links: [
        { href: "/locations/lutz", label: "Lutz fence handyman" },
        { href: "/locations/wesley-chapel", label: "Wesley Chapel fence handyman" },
      ],
    },
    {
      name: "Carrollwood",
      body: "Carrollwood privacy fences along Northdale and Carrollwood Village take board swaps, post hardware, and gates that drag. We work from the Westchase truck with wood and fasteners for a repair, not a fencing-company showroom.",
      links: [
        { href: "/locations/carrollwood", label: "Carrollwood handyman hub" },
        { href: "/locations/citrus-park-fl", label: "Citrus Park handyman" },
      ],
    },
  ],
};
