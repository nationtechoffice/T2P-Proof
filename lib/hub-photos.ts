import { jobSitePhotos, type JobSitePhoto } from "@/lib/images";

/** Real job stills for GBP city hubs. Alts stay neutral — they are not labeled as a specific city. */
export type HubJobPhoto = {
  slug: string;
  jpg: string;
  webp: string;
  avif: string;
  thumb: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
  alt: string;
};

function fromJobSite(photo: JobSitePhoto, alt: string): HubJobPhoto {
  return { ...photo, alt };
}

function still(photo: {
  slug: string;
  file: string;
  width: number;
  height: number;
  thumbWidth?: number;
  thumbHeight?: number;
  alt: string;
  jpg?: string;
}): HubJobPhoto {
  const webp = `/images/work/${photo.file}.webp`;
  return {
    slug: photo.slug,
    jpg: photo.jpg ?? webp,
    webp,
    avif: `/images/work/${photo.file}.avif`,
    thumb: `/images/work/${photo.file}-thumb.webp`,
    width: photo.width,
    height: photo.height,
    thumbWidth: photo.thumbWidth ?? 800,
    thumbHeight: photo.thumbHeight ?? Math.round((800 * photo.height) / photo.width),
    alt: photo.alt,
  };
}

const blindsInstall = fromJobSite(jobSitePhotos.blindsInstallBrandedBack, "Handyman Pros Florida blinds installation");
const blindsHardware = fromJobSite(
  jobSitePhotos.blindsHardwareDrillProfile,
  "Handyman Pros Florida blind hardware installation"
);
const blindsReach = fromJobSite(jobSitePhotos.blindsInstallBrandedReach, "Handyman Pros Florida blinds installation");
const workShirt = fromJobSite(jobSitePhotos.windowWorkBrandedShirt, "Handyman Pros Florida branded work shirt");

const drywallUnderWindow = still({
  slug: "drywall-wall-repair-under-window",
  file: "handyman-pros-florida-tampa-bay-drywall-wall-repair-under-window",
  width: 1400,
  height: 1050,
  thumbHeight: 600,
  alt: "Handyman Pros Florida drywall repair",
});
const drywallWindowPrep = still({
  slug: "drywall-room-window-prep",
  file: "handyman-pros-florida-tampa-bay-drywall-room-window-prep",
  width: 1400,
  height: 1050,
  thumbHeight: 600,
  alt: "Handyman Pros Florida drywall repair",
});
const drywallChandelier = still({
  slug: "drywall-room-chandelier-prep",
  file: "handyman-pros-florida-tampa-bay-drywall-room-chandelier-prep",
  width: 1400,
  height: 1050,
  thumbHeight: 600,
  alt: "Handyman Pros Florida drywall repair",
});
const drywallFinishing = still({
  slug: "drywall-finishing-worker",
  file: "handyman-pros-florida-tampa-bay-drywall-finishing-worker",
  width: 1400,
  height: 1050,
  thumbHeight: 600,
  alt: "Handyman Pros Florida drywall finishing",
});
const drywallProtected = still({
  slug: "protected-room-drywall-work",
  file: "handyman-pros-florida-tampa-bay-protected-room-drywall-work",
  width: 1400,
  height: 1050,
  thumbHeight: 600,
  alt: "Handyman Pros Florida drywall repair",
});
const drywallRounded = still({
  slug: "drywall-rounded-window-opening",
  file: "handyman-pros-florida-tampa-bay-drywall-rounded-window-opening",
  width: 1600,
  height: 1200,
  thumbHeight: 600,
  alt: "Handyman Pros Florida drywall finishing",
});
const ceilingFan = still({
  slug: "maps-ceiling-fan",
  file: "maps-ceiling-fan",
  width: 1600,
  height: 1200,
  alt: "Handyman Pros Florida ceiling fan installation",
  jpg: "/images/work/maps-ceiling-fan.jpg",
});
const largeTile = still({
  slug: "large-format-tile-floor-installation",
  file: "handyman-pros-florida-tampa-bay-large-format-tile-floor-installation",
  width: 1600,
  height: 1200,
  thumbHeight: 600,
  alt: "Handyman Pros Florida tile installation",
});
const porcelainTile = still({
  slug: "porcelain-tile-install",
  file: "porcelain-tile-install",
  width: 1600,
  height: 1200,
  alt: "Handyman Pros Florida tile installation",
  jpg: "/images/work/porcelain-tile-install.jpg",
});
const fenceRepair = still({
  slug: "fence-repair",
  file: "fence-repair",
  width: 1184,
  height: 864,
  alt: "Handyman Pros Florida fence repair",
  jpg: "/images/work/fence-repair.jpg",
});
const fencePost = still({
  slug: "fence-post-reset",
  file: "fence-post-reset",
  width: 1184,
  height: 864,
  alt: "Handyman Pros Florida fence post repair",
  jpg: "/images/work/fence-post-reset.jpg",
});

// Fence and fan stills have no separate thumb file. Use the full WebP.
for (const photo of [ceilingFan, porcelainTile, fenceRepair, fencePost]) {
  photo.thumb = photo.webp;
  photo.thumbWidth = photo.width;
  photo.thumbHeight = photo.height;
}

/** Different real photos on each GBP hub so the pages are not copies of each other. */
export const hubJobPhotos: Record<string, readonly HubJobPhoto[]> = {
  clearwater: [blindsInstall, blindsHardware, drywallUnderWindow],
  "st-petersburg": [blindsReach, workShirt, drywallWindowPrep],
  "palm-harbor-fl": [drywallChandelier, drywallFinishing, blindsInstall],
  "oldsmar-fl": [largeTile, porcelainTile, blindsHardware],
  "dunedin-fl": [ceilingFan, blindsReach, drywallRounded],
  "safety-harbor-fl": [workShirt, drywallProtected, fenceRepair],
  "tarpon-springs-fl": [fenceRepair, fencePost, blindsHardware],
  holiday: [fencePost, drywallUnderWindow, ceilingFan],
  "new-port-richey-fl": [fenceRepair, drywallFinishing, blindsReach],
  keystone: [fencePost, fenceRepair, workShirt],
  "citrus-park-fl": [ceilingFan, blindsInstall, drywallWindowPrep],
  "town-n-country-fl": [blindsReach, ceilingFan, drywallUnderWindow],
};
