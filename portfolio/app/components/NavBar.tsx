import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex flex-row h-24 items-center bg-red-300">
      <Link href="/">
        <AiFillHome className="m-10 text-5xl drop-shadow-md cursor-pointer" />
      </Link>
      <Link className="mr-2" href="/projects">
        <div className="text-3xl drop-shadow-md cursor-pointer bg-red-200 hover:shadow-lg hover:bg-red-400 p-2 rounded-lg">
          Projects
        </div>
      </Link>
      <Link className="m-2" href="/about">
        <div className="text-3xl drop-shadow-md cursor-pointer bg-red-200 hover:shadow-lg hover:bg-red-400 p-2 rounded-lg">
          About me
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
