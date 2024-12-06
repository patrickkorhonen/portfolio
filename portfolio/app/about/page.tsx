"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import BurgerMenu from "../components/BurgerMenu";


const page = () => {
  const openPdf = () => {
    window.open("/kandi.pdf", "_blank");
  };

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
        <h1 className="font-bold text-5xl text-center mb-12">About me</h1>
        <h2 className="text-4xl mb-4">Who am I?</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 ">
          <p className="text-xl sm:col-span-3 my-auto">I am 23 years old Computer Science student from Helsinki. I am currently studying fourth year at Aalto University. I completed my bachelor&apos;s degree in spring 2024 and currently doing Master&apos;s Programme in Computer, Communication and Information Sciences (Computer Science, Study track: Web Technologies, Application and Science). I am always eager to learn new things and improve my skills. I would call myself a team player and a good porblem solver.</p>
          <div className="lg:col-span-2 flex flex-col mx-auto w-2/3 lg:w-2/5">
            <button
              className=" border-2 border-slate-200 shadow-lg rounded mx-auto "
              onClick={openPdf}
            >
              <Image
                src="/images/kandi.png"
                alt="kandi"
                width={0}
                height={0}
                sizes="100vw"
                style={{ height: "100%", width: "auto" }}
              />
            </button>
            <p className="text-center">Click to view my Bachelor&apos;s Thesis (In Finnish)</p>
          </div>
        </div>
        <h2 className="text-4xl mt-12 mb-4">My hobbies</h2>
        <div className="lg:grid lg:grid-cols-5 gap-8">
          <p className="text-xl lg:col-span-3 my-auto">
            When I&apos;m not coding, you can find me golfing, playing video games or at the gym.
            My ultimate goal is to leverage technology to make everyday life easier and more enjoyable for everyone.
            I find myself constantly looking for problems to solve with technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
