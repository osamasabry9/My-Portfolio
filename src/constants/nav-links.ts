import { NavLinks } from "@/types/interfaces";
import { Book, MessageSquareText, User, Wrench } from "lucide-react";

export const navLinks: NavLinks[] = [
  {
    title: "About",
    href: "#about",
    icon: User,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: Wrench,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: Book,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: MessageSquareText,
  },
];
