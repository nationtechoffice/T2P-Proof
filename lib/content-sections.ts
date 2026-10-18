/** Brief-driven page sections: H2, paragraphs, optional H3s, bullets, internal links and public sources. */
export interface ContentLink {
  href: string;
  label: string;
}

export interface ContentSection {
  id?: string;
  heading: string;
  paragraphs?: string[];
  subsections?: { heading: string; paragraphs: string[] }[];
  bullets?: string[];
  /** Internal links shown as "Related:" under the section. */
  links?: ContentLink[];
  /** Public sources for facts in the section. Rendered as outbound links. */
  sources?: ContentLink[];
}
