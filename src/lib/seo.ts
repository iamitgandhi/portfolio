/**
 * seo.ts — Structured data & meta helpers
 *
 * Enhanced for Google Knowledge Panel eligibility:
 *  - Person schema with image, address, knowsAbout, alumniOf, worksFor
 *  - WebSite with SearchAction (Sitelinks Searchbox signal)
 *  - ProfilePage schema (2023 best-practice for personal portfolio sites)
 */

import type { SiteMeta, SocialLink } from "@/data/types";

// ─── Helpers ────────────────────────────────────────────────────────────────

/** `<title>` — keep concise for tabs and SEO. */
export function documentTitle(meta: SiteMeta): string {
  return meta.title;
}

export function canonicalUrl(site: URL | undefined, pathname: string): URL {
  const base = site ?? new URL("https://example.com");
  return new URL(pathname, base);
}

export function ogImageUrl(site: URL | undefined, meta: SiteMeta): URL | undefined {
  if (!meta.ogImage) return undefined;
  const base = site ?? new URL("https://example.com");
  return new URL(meta.ogImage, base);
}

/** Profile URLs for structured data (excludes mailto). */
export function socialProfileUrls(social: SocialLink[]): string[] {
  return social
    .map((s) => s.href)
    .filter((href) => !href.startsWith("mailto:"));
}

// ─── Person (Google Knowledge Panel core) ───────────────────────────────────
export function personJsonLd(
  meta: SiteMeta,
  site: URL | undefined,
  social: SocialLink[],
): Record<string, unknown> {
  const siteUrl = (site ?? new URL("https://example.com")).href.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,

    name: "Amit Kumar Gandhi",
    givenName: "Amit Kumar",
    familyName: "Gandhi",
    url: siteUrl,
    email: "contact@amitkumargandhi.com",
    telephone: "+91-999-006-5605",

    image: {
      "@type": "ImageObject",
      contentUrl: `${siteUrl}/Amit_pfp.jpg`,
      url: `${siteUrl}/Amit_pfp.jpg`,
      caption: "Amit Kumar Gandhi — WooCommerce & WordPress Specialist",
    },

    jobTitle: meta.jobTitle ?? "WooCommerce Specialist",
    description: meta.description,

    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },

    worksFor: {
      "@type": "Organization",
      name: "vSplash Techlabs Private Limited",
      url: "https://vsplashtechlabs.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },

    owns: {
      "@type": "Organization",
      name: "BAD Design Media",
      url: "https://baddesignmedia.com",
    },

    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Guru Gobind Singh Indraprastha University",
      url: "https://ipu.ac.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
    },

    hasOccupation: {
      "@type": "Occupation",
      name: "WooCommerce & WordPress Developer",
      description:
        "Builds and optimises WooCommerce stores, automates business workflows, architects PODS/CPT data models, integrates third-party APIs, and develops custom WordPress solutions.",
      occupationLocation: { "@type": "Country", name: "India" },
      skills:
        "WordPress, WooCommerce, Gravity Forms, PODS, CPT, PHP, JavaScript, HTML5, CSS3, REST APIs, MySQL, Web Scraping, Figma, Git",
    },

    knowsAbout: [
      "WordPress Development",
      "WooCommerce",
      "E-commerce Development",
      "Gravity Forms",
      "PODS Custom Post Types",
      "Web Scraping",
      "REST API Integration",
      "PHP",
      "Business Automation",
      "MySQL",
      "Figma",
    ],

    knowsLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Hindi" },
    ],

    sameAs: [
      ...socialProfileUrls(social),
      "https://baddesignmedia.com",
      "https://initiatorsmedia.com",
    ],
  };
}

// ─── WebSite (Sitelinks Searchbox signal) ────────────────────────────────────
export function webSiteJsonLd(
  meta: SiteMeta,
  site: URL | undefined,
): Record<string, unknown> {
  const siteUrl = (site ?? new URL("https://example.com")).href.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: meta.author,
    url: siteUrl,
    description: meta.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: { "@id": `${siteUrl}/#person` },
  };
}

// ─── ProfilePage (2023 Google best-practice for personal portfolio sites) ────
export function profilePageJsonLd(
  meta: SiteMeta,
  site: URL | undefined,
): Record<string, unknown> {
  const siteUrl = (site ?? new URL("https://example.com")).href.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: meta.title,
    description: meta.description,
    datePublished: "2024-01-01T00:00:00+05:30",
    dateModified: new Date().toISOString(),
    inLanguage: "en-US",
    mainEntity: { "@id": `${siteUrl}/#person` },
    about: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      ],
    },
  };
}
