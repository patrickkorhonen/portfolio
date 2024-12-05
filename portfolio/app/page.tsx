"use client";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import NavBar from "./components/NavBar";
import BurgerMenu from "./components/BurgerMenu";

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col justify-between flex-grow">
      <div className="col-span-2 h-full p-8 flex flex-col">
        <div className="md:hidden">
          <BurgerMenu />
        </div>
        <div className="hidden md:block">
          <NavBar />
        </div>
        <div className="flex-grow flex flex-col">
          <div className="my-auto">
            <div className="flex flex-col sm:flex-row items-center  justify-center">
              <Image
                src="/images/patrickbw.png"
                alt="Patrick Korhonen"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded mb-2 sm:mb-0 w-1/2 sm:w-1/5"
              />
              <div className="flex flex-col items-center sm:items-start mt-auto sm:pl-4">
                <p className="text-xl ">Patrick Korhonen</p>
                <p className="text-3xl ">Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-16 h-full bg-[#417fd1] flex flex-col">
        <div className="h-full flex flex-col justify-center">
          <p className="text-white text-4xl font-semibold ">
            Hi, my name is Patrick. Welcome to my portfolio website!
          </p>
          <p className="text-slate-200 text-xl mt-4">
            I am a CCIS master's student from Aalto University with a passion
            for software development and technology.
          </p>
          <Link href="/contact">
            <div className="bg-white w-max py-2 px-4 mt-8 text-[#417fd1] text-lg font-bold rounded hover:shadow-xl">
              Contact me
            </div>
          </Link>
        </div>
        <div className="flex flex-col self-end mt-auto">
          <SocialIcon
            network="github"
            style={{ height: 40, width: 40 }}
            url="https://github.com/patrickkorhonen"
          />
          <SocialIcon
            network="instagram"
            className="mt-2"
            style={{ height: 40, width: 40 }}
            url="https://www.instagram.com/patrick.korhonen/"
          />
          <SocialIcon
            network="linkedin"
            className="mt-2"
            style={{ height: 40, width: 40 }}
            url="https://www.linkedin.com/in/patrick-korhonen-546bb0276"
          />
        </div>
      </div>
    </div>
  );
}
