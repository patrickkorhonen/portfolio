"use client";
import Link from "next/link";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About me", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  return (
    <div className="grid grid-cols-3">
            <Link className="cursor-default col-span-1" href="/">
              <div className="text-3xl font-black text-center text-[#417fd1]">
                Portfolio
              </div>
            </Link>
            <div className="flex flex-row justify-around col-span-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  className="flex items-center"
                  href={link.href}
                >
                  <div className="text-xl text-center text-black hover:text-[#417fd1] hover:underline underline-offset-8">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
  );
};

export default NavBar;
