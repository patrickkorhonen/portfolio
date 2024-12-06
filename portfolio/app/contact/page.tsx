import React from "react";
import Link from "next/link";
import { MdOutlineAlternateEmail, MdPhoneEnabled } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { SocialIcon } from "react-social-icons";
import NavBar from "../components/NavBar";
import BurgerMenu from "../components/BurgerMenu";

const contactPage = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col flex-grow justify-between w-screen">
        <div className="flex flex-col col-span-2 h-max p-8">
          <div className="md:hidden">
            <BurgerMenu />
          </div>
          <div className="hidden md:block">
            <NavBar />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-16 py-12">
        <h1 className="font-bold text-5xl text-center mb-12">Contact Me</h1>
        <div className="grid md:grid-cols-3">
          <div className="flex flex-col gap-4 items-center p-4">
            <MdOutlineAlternateEmail size={50} />
            <h2 className="font-bold text-2xl opacity-50">EMAIL</h2>
            <p className="text-xl">patrick.korhonen2@gmail.com</p>
          </div>
          <div className="flex flex-col gap-4 items-center p-4">
            <MdPhoneEnabled size={50} />
            <h2 className="font-bold text-2xl opacity-50">PHONE</h2>
            <p className="text-xl">+358 445033300</p>
          </div>
          <div className="flex flex-col gap-4 items-center p-4">
            <TbSocial size={50} />
            <h2 className="font-bold text-2xl opacity-50 ">SOCIAL MEDIA</h2>
            <div className="flex flex-row ">
              <SocialIcon
                network="github"
                style={{ height: 30, width: 30 }}
                url="https://github.com/patrickkorhonen"
              />
              <SocialIcon
                network="instagram"
                className="ml-2"
                style={{ height: 30, width: 30 }}
                url="https://www.instagram.com/patrick.korhonen/"
              />
              <SocialIcon
                network="linkedin"
                className="ml-2"
                style={{ height: 30, width: 30 }}
                url="https://www.linkedin.com/in/patrick-korhonen-546bb0276"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
