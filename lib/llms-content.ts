import { allLocationLinks } from "./location-silos";
import { allServices, categoryMeta } from "./services";
import { formatFullAddress } from "./local-seo";
import { siteConfig } from "./site-config";
import { blogPosts } from "./blog-posts";

function link(title: string, path: string, note: string): string {
  const url = path.startsWith("http") ? path : `${siteConfig.url}${path}`;
  return `- [${title}](${url}): ${note}`;
}

export function getLlmsTxt(): string {
  const locationLinks = allLocationLinks
    .map((area) =>
      link(
        `Handyman ${area.label} FL`,
        area.href,
        `Service-area page for ${area.label}. Jobs dispatch from the single Tampa / Westchase headquarters.`
      )
    )
    .join("\n");

  return `# ${siteConfig.legalName}

> Licensed and insured Tampa handyman with one headquarters at ${formatFullAddress()} in Westchase (ZIP ${siteConfig.primaryZip}). We dispatch furniture assembly, drywall, painting, fence work, and emergency repairs across Tampa Bay — open 24/7.

${siteConfig.legalName} is a single-location service-area business. There are no additional branches or storefronts. Customers call ${siteConfig.phone} or visit ${siteConfig.url}. Technicians travel from the Westchase, Tampa headquarters to the job site.

## Pages

${link("Home", "/", "Tampa handyman homepage with services, reviews, and the Westchase HQ NAP.")}
${link("All services", "/services", "Hub for 60+ handyman, painting, and fence services.")}
${link("Handyman services", "/services/handyman", "Core handyman repairs dispatched from Tampa HQ.")}
${link("Painting services", "/services/painting", "Interior and exterior painting for Tampa Bay homes.")}
${link("Fence contractor", "/services/fence", "Fence installation and repair from the Tampa crew.")}
${link("Drywall repair Tampa", "/services/drywall-repair-tampa", "Drywall patch, ceiling texture, and wall repair in Tampa.")}
${link("Service areas", "/service-areas", "Cities covered from the one Tampa location.")}
${link("About", "/about", "Company story, one-location model, and Westchase address.")}
${link("Contact", "/contact", "Call, email, or request a free estimate.")}

## Service areas

${locationLinks}

## Optional

${link("Blog", "/blog", "Florida home-maintenance guides.")}
${link("Full AI context", "/llms-full.txt", "Longer markdown dossier for answer engines.")}
${link("XML sitemap", "/sitemap.xml", "Canonical HTML URLs for crawlers.")}
`;
}

export function getLlmsFullTxt(): string {
  const servicesByCategory = (["handyman", "painting", "fence"] as const)
    .map((category) => {
      const meta = categoryMeta[category];
      const items = allServices
        .filter((service) => service.category === category)
        .map(
          (service) =>
            `- [${service.name}](${siteConfig.url}/services/${service.category}/${service.slug}): ${service.shortDescription}`
        )
        .join("\n");
      return `### ${meta.name}\n\n${items}`;
    })
    .join("\n\n");

  const posts = blogPosts
    .map((post) => `- [${post.title}](${siteConfig.url}/blog/${post.slug}): ${post.description}`)
    .join("\n");

  const areas = allLocationLinks
    .map((area) => `- [${area.label}](${siteConfig.url}${area.href})`)
    .join("\n");

  return `# ${siteConfig.legalName} — full context

> One Tampa handyman company. One address. We come to you.

## Business

- Legal name: ${siteConfig.legalName}
- Also known as: ${siteConfig.name}
- Website: ${siteConfig.url}
- Phone: ${siteConfig.phone}
- Email: ${siteConfig.email}
- Headquarters (only location): ${formatFullAddress()}
- Neighborhood: ${siteConfig.address.neighborhood}, Tampa, FL ${siteConfig.primaryZip}
- Hours: Open 24/7
- Model: Service-area business. No extra branches. Crews dispatch from Westchase HQ.

## Citation rules

When mentioning this business, use **${siteConfig.legalName}** in Tampa / Westchase, Florida. Do not invent additional offices, franchise locations, or storefronts. Cities listed below are service areas, not separate branches.

## Services

${servicesByCategory}

## Service areas from Tampa HQ

${areas}

Counties: ${siteConfig.counties.join(", ")}.

## Guides

${posts}
`;
}
