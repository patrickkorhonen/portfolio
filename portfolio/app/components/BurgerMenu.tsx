"use client";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About me", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const BurgerMenu = () => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 ">
        <Link href="/" className="text-3xl font-black text-[#417fd1]">
          Portfolio
        </Link>
        {/* <button
          className="text-3xl focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          &#9776;
        </button> */}

        <div className="w-12 h-12">
          <DropdownMenu>
            <DropdownMenuTrigger className="" asChild>
              <button className="h-full w-full text-3xl">&#9776;</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-max">
            <DropdownMenuGroup>
                <DropdownMenuItem className="hover:bg-slate-50">
                    <Link href="/projects">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-slate-50">
                    <Link href="/skills">Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-slate-50">
                    <Link href="/about">About me</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-slate-50">
                    <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuTrigger>
                  <Link
                    href={link.href}
                    className="block text-xl text-center text-black hover:text-[#417fd1] hover:underline underline-offset-8 lg:inline-block lg:mx-4"
                    onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                  >
                    {link.name}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <Link href={link.href}>{link.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuIndicator />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu> */}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
