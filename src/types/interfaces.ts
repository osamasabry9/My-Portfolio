import { LucideIcon } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: LucideIcon;
}
export interface NavLinks extends SocialLink {
  title: string;
}

export interface Statistic {
  label: string;
  value: number;
}
export type SkillsCategory = "Frontend" | "Backend" | "Mobile App" | "Tools";

export interface Skill {
  _id: string;
  label: string;
  category: SkillsCategory;
  value: number;
}

export interface TabItem {
  value: SkillsCategory;
  icon: LucideIcon;
  label: SkillsCategory;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  images: any[];
  demoLink: string;
  githubLink: string;
  publishedAt: Date;
  isResponsive: boolean;
  tags: string[];
}


export interface AboutMe {
  _id: string;
  jobTitle: string;
  summary: string;
}