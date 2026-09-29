export interface RecentWorkPhoto {
  slug: string;
  webp: string;
  avif: string;
  thumb: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
  alt: string;
  caption: string;
  /** Set only when the manifest names a service page that already exists. */
  href?: string;
  linkLabel?: string;
}

/**
 * Real Google Business Profile job photos.
 * Alt text and captions are copied from the photo manifest — no added locations.
 */
export const recentWorkPhotos: RecentWorkPhoto[] = [
  {
    slug: "backyard-gravel-landscape-prep",
    webp: "/images/work/handyman-pros-florida-tampa-bay-backyard-gravel-landscape-prep.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-backyard-gravel-landscape-prep.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-backyard-gravel-landscape-prep-thumb.webp",
    width: 1400,
    height: 1866,
    thumbWidth: 800,
    thumbHeight: 1066,
    alt: "Landscape fabric and gray gravel being prepared along a fenced backyard side passage",
    caption:
      "Backyard side passage prepared with landscape fabric and gravel beside a fence and air-conditioning unit.",
  },
  {
    slug: "built-in-wall-niches",
    webp: "/images/work/handyman-pros-florida-tampa-bay-built-in-wall-niches.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-built-in-wall-niches.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-built-in-wall-niches-thumb.webp",
    width: 1600,
    height: 1200,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Finished built-in wall niches above drawer cabinets with recessed ceiling lights",
    caption: "Finished built-in wall niches above drawer cabinets with recessed ceiling lights.",
  },
  {
    slug: "large-format-tile-floor-installation",
    webp: "/images/work/handyman-pros-florida-tampa-bay-large-format-tile-floor-installation.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-large-format-tile-floor-installation.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-large-format-tile-floor-installation-thumb.webp",
    width: 1600,
    height: 1200,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Large light-colored floor tiles installed across a kitchen and living area under renovation",
    caption: "Large-format light tile flooring installed across a kitchen and living area.",
    href: "/services/tile-installation",
    linkLabel: "Tile installation",
  },
  {
    slug: "drywall-rounded-window-opening",
    webp: "/images/work/handyman-pros-florida-tampa-bay-drywall-rounded-window-opening.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-drywall-rounded-window-opening.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-drywall-rounded-window-opening-thumb.webp",
    width: 1600,
    height: 1200,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Smooth drywall wall with a rounded window opening and a step ladder",
    caption: "Drywall-finished wall with a rounded window opening, ready for final trim.",
    href: "/services/drywall-repair",
    linkLabel: "Drywall repair",
  },
  {
    slug: "built-in-console-drywall",
    webp: "/images/work/handyman-pros-florida-tampa-bay-built-in-console-drywall.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-built-in-console-drywall.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-built-in-console-drywall-thumb.webp",
    width: 1400,
    height: 1050,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Built-in drawer cabinets and a console under construction against a patched drywall wall",
    caption: "Built-in drawer cabinets and console taking shape against a patched drywall wall.",
  },
  {
    slug: "drywall-wall-repair-under-window",
    webp: "/images/work/handyman-pros-florida-tampa-bay-drywall-wall-repair-under-window.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-drywall-wall-repair-under-window.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-drywall-wall-repair-under-window-thumb.webp",
    width: 1400,
    height: 1050,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Handyman Pros Florida technician patching and finishing drywall under a window",
    caption: "Drywall wall repair under a window",
    href: "/services/drywall-repair",
    linkLabel: "Drywall repair",
  },
  {
    slug: "drywall-room-window-prep",
    webp: "/images/work/handyman-pros-florida-tampa-bay-drywall-room-window-prep.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-drywall-room-window-prep.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-drywall-room-window-prep-thumb.webp",
    width: 1400,
    height: 1050,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Unfinished room with drywall mud work around windows and a door, materials staged",
    caption: "Drywall prep around windows and door",
    href: "/services/drywall-repair",
    linkLabel: "Drywall repair",
  },
  {
    slug: "drywall-room-chandelier-prep",
    webp: "/images/work/handyman-pros-florida-tampa-bay-drywall-room-chandelier-prep.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-drywall-room-chandelier-prep.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-drywall-room-chandelier-prep-thumb.webp",
    width: 1400,
    height: 1050,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Room under drywall repair with chandelier, masked doorway, and tools on the floor",
    caption: "Drywall repair room with chandelier",
    href: "/services/drywall-repair",
    linkLabel: "Drywall repair",
  },
  {
    slug: "drywall-finishing-worker",
    webp: "/images/work/handyman-pros-florida-tampa-bay-drywall-finishing-worker.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-drywall-finishing-worker.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-drywall-finishing-worker-thumb.webp",
    width: 1400,
    height: 1050,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Worker finishing patched drywall in a room protected with plastic sheeting",
    caption: "Drywall finishing with plastic protection",
    href: "/services/drywall-repair",
    linkLabel: "Drywall repair",
  },
  {
    slug: "protected-room-drywall-work",
    webp: "/images/work/handyman-pros-florida-tampa-bay-protected-room-drywall-work.webp",
    avif: "/images/work/handyman-pros-florida-tampa-bay-protected-room-drywall-work.avif",
    thumb: "/images/work/handyman-pros-florida-tampa-bay-protected-room-drywall-work-thumb.webp",
    width: 1400,
    height: 1050,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Room masked for drywall work with taped windows and protective coverings over furnishings",
    caption: "Masked room ready for drywall work",
    href: "/services/drywall-repair",
    linkLabel: "Drywall repair",
  },
];
