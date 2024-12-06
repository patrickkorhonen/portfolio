"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
        <div className="w-12 h-12">
          <DropdownMenu>
            <DropdownMenuTrigger className="" asChild>
              <button className="h-full w-full text-3xl">&#9776;</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-max">
            <DropdownMenuGroup>
                <DropdownMenuItem className="hover:bg-slate-50">
                    <Link className="w-full" href="/projects">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-slate-50">
                    <Link className="w-full" href="/skills">Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-slate-50">
                    <Link className="w-full" href="/about">About me</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-slate-50">
                    <Link className="w-full" href="/contact">Contact</Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
