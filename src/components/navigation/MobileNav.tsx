import { navLinks } from "@/constants/nav-links";
import React from "react";

const MobileNav = () => {
  return (
    <div className="flex md:hidden fixed bottom-0 left-0 w-full py-4 border-t bg-background rounded-t-lg shadow-lg   ">
      <nav className=" container flex justify-evenly items-center">
        {navLinks.map((link, index) => {
          const { href, title, icon: Icon } = link;
          return (
            <a
              key={index}
              href={href}
              className="size-10 p-2 grid place-content-center "
            >
              <div className="flex flex-col items-center gap-y-1 hover:text-primary">
                <Icon className="size-6" />
                <span className="capitalize text-sm font-semibold">
                  {title}
                </span>
              </div>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileNav;
