import React from "react";
import Logo from "./logo";
import ModeToggle from "./modeToggle";
import { navLinks } from "@/constants/nav-links";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 py-2 w-full bg-background/60 backdrop-blur-md z-50">
      <div className="container p-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center gap-x-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="capitalize font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default NavBar;
