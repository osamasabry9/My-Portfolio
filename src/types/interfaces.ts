import { LucideIcon } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: LucideIcon;
}
export interface NavLinks extends SocialLink {
  title: string;
}
