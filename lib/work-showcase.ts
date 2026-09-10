export interface WorkPhoto {
  slug: string;
  src: string;
  alt: string;
  caption: string;
  service: string;
  city: string;
  href: string;
}

/**
 * Real job photos pulled from the Handyman Pros FL Google Business / Maps listing.
 * Source: https://maps.app.goo.gl/XhDwjzgTujJK7JyT9
 */
export const workPhotos: WorkPhoto[] = [
  {
    slug: "service-van-tampa",
    src: "/images/work/service-van-tampa.jpg",
    alt: "Handyman Pros FL branded service van arriving for a Tampa Bay home repair",
    caption:
      "Handyman Pros FL on-site in Tampa Bay — licensed mobile crew rolling up ready for drywall, mounting, and home repairs.",
    service: "General Handyman",
    city: "Tampa Bay, FL",
    href: "/locations/tampa",
  },
  {
    slug: "floor-tile-grouting-tampa",
    src: "/images/work/floor-tile-grouting.jpg",
    alt: "Floor tile grouting in progress with wet vac on a Tampa Bay job",
    caption:
      "Tile & grout Tampa — terracotta floor joints packed, cleaned, and vacuum-prepped for a durable commercial-kitchen finish.",
    service: "Tile & Grout",
    city: "Tampa, FL",
    href: "/services",
  },
  {
    slug: "bathroom-tile-grout-tampa",
    src: "/images/work/bathroom-tile-grout.jpg",
    alt: "Bathroom wall tile grouting by Handyman Pros FL in Tampa",
    caption:
      "Bathroom tile Tampa — white wall tile floated and grouted clean for a sharp, water-ready remodel finish.",
    service: "Tile Installation",
    city: "Tampa, FL",
    href: "/services",
  },
  {
    slug: "porcelain-tile-install-tampa",
    src: "/images/work/porcelain-tile-install.jpg",
    alt: "Large-format porcelain floor tile installation with leveling spacers in Tampa FL",
    caption:
      "Porcelain tile install Tampa — large-format marble-look flooring leveled with spacers for a flat, modern kitchen floor.",
    service: "Flooring",
    city: "Tampa, FL",
    href: "/services",
  },
  {
    slug: "accent-wall-flooring-tampa",
    src: "/images/work/accent-wall-flooring.jpg",
    alt: "Wood slat accent wall and LVP flooring install in a Tampa home office",
    caption:
      "Accent wall & flooring Tampa — fluted wood slat wall plus gray LVP flooring for a clean home-office remodel.",
    service: "Interior Remodel",
    city: "Tampa, FL",
    href: "/services",
  },
  {
    slug: "drywall-finish-tampa",
    src: "/images/work/drywall-finish-ladder.jpg",
    alt: "Handyman finishing drywall compound on an interior wall in Tampa FL",
    caption:
      "Drywall repair Tampa — compound skim and finish work on interior walls so paint lays smooth in Florida humidity.",
    service: "Drywall Repair",
    city: "Tampa, FL",
    href: "/services/drywall-repair",
  },
  {
    slug: "ceiling-drywall-tampa",
    src: "/images/work/ceiling-drywall-mud.jpg",
    alt: "Ceiling drywall taped and mudded with fixture cutout in Tampa FL",
    caption:
      "Ceiling drywall Tampa — seams taped, screws mudded, and fixture cutouts ready before sanding and paint.",
    service: "Drywall",
    city: "Tampa, FL",
    href: "/services/drywall-repair",
  },
  {
    slug: "wall-patch-repair-tampa",
    src: "/images/work/wall-patch-repair.jpg",
    alt: "Interior wall patch and drywall hole repair in a Tampa home",
    caption:
      "Wall patch Tampa — clean drywall hole repairs with drop-cloth protection so living spaces stay tidy.",
    service: "Drywall Repair",
    city: "Tampa, FL",
    href: "/services/drywall-repair",
  },
  {
    slug: "exterior-trim-gutters-tampa",
    src: "/images/work/exterior-trim-gutters.jpg",
    alt: "Exterior soffit trim paint and gutter downspout on a Tampa Bay home",
    caption:
      "Exterior trim & gutters Tampa Bay — fresh soffit paint, clean gutter lines, and tidy exterior detailing.",
    service: "Exterior Painting",
    city: "Tampa Bay, FL",
    href: "/services/painting",
  },
  {
    slug: "under-sink-plumbing-tampa",
    src: "/images/work/under-sink-plumbing.jpg",
    alt: "Under-sink plumbing repair in a Tampa kitchen by Handyman Pros FL",
    caption:
      "Kitchen plumbing help Tampa — under-sink fittings checked and tightened for everyday faucet and drain issues.",
    service: "Plumbing Help",
    city: "Tampa, FL",
    href: "/services",
  },
];
