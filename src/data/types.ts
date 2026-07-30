export type SocialId = "github" | "linkedin" | "x" | "email" | "instagram" | "facebook";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  author: string;
  jobTitle?: string;
  ogImage?: string;
}

export interface HeroAvatar {
  src: string;
  alt: string;
  objectPosition?: string;
}

export interface HeroResume {
  href: string;
  label?: string;
  fileName?: string;
}

export interface HeroContent {
  greeting?: string;
  avatar?: HeroAvatar;
  name: string;
  role: string;
  tags: string[];
  summary: string;
  resume?: HeroResume;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillItem {
  icon: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  href?: string;
  links?: ProjectLink[];
  tags: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  details?: string;
}

export interface ContactContent {
  intro: string;
  email: string;
  phone: string;
}

export interface OpenSourceItem {
  role: string;
  project: string;
  description: string;
  repoHref?: string;
  links?: ProjectLink[];
  tags: string[];
}

export interface SiteContent {
  meta: SiteMeta;
  hero: HeroContent;
  social: SocialLink[];
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  openSource: OpenSourceItem[];
  projects: ProjectItem[];
  education: EducationItem;
  contact: ContactContent;
  footerQuote: { text: string; author: string };
}
