import { LucideIcon } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: LucideIcon;
}
export interface NavLinks extends SocialLink {
  title: string;
}
<<<<<<< HEAD
=======

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
>>>>>>> 6491077fa574468ca226689f55b93cb087045e34
