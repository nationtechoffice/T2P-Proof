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
    width: 1280,
    height: 1708,
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
    width: 1600,
    height: 1200,
    thumbWidth: 800,
    thumbHeight: 600,
    alt: "Built-in drawer cabinets and a console under construction against a patched drywall wall",
    caption: "Built-in drawer cabinets and console taking shape against a patched drywall wall.",
  },
];
