import { socialLinks } from "@/constants/social-links";
import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "../ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t  pt-4 pb-28 md:pb-4 ">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-y-4 ">
        <p className="text-sm ">
          Copyright &copy; {currentYear} - All Rights Reserved
        </p>
        <div className="flex gap-2 items-center">
          {socialLinks.map((link, index) => {
            const { href, icon: Icon } = link;
            return (
              <a
                key={index}
                href={href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "rounded-full"
                )}
                target="_blank"
              >
                <Icon className="size-6" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
