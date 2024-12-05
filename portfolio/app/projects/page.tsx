import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import BurgerMenu from "../components/BurgerMenu";

const projects = [
  {
    title: "Logo Quiz Suomi",
    description:
      "React native application where you can guess logos of Finnish companies. I used TypeScript and Expo to build the app. This project taught me a lot about mobile development.",
    images: [
      "/images/IMG_4915.PNG",
      "/images/IMG_4916.PNG",
      "/images/IMG_4919.PNG",
    ],
    link: "https://github.com/patrickkorhonen/LogoQuizSuomi",
    linkText: "Github repository",
  },
  {
    title: "Hangman",
    description:
      "This project is a hangman game that includes all Finnish words. It is one of the first web projects that I've done. I used JavaScript and tailwind CSS to build the game. This project taught me simple UI design.",
    images: ["/images/hirsi.png"],
    link: "/projects/hirsipuu",
    linkText: "Try the game",
  },
  {
    title: "Delivery Fee Calculator",
    description:
      "This project calculates the delivery fee based on the distance between the customer and the restaurant, the number of items and order time. I used React and TypeScript to build the app. This project taught me responsive UI design.",
    images: ["/images/delivery.png"],
    link: "https://delivery-fee-calculator-eight.vercel.app",
    linkText: "Visit page",
  },
  {
    title: "Portfolio website",
    description:
      "I used Next.js and Tailwind CSS to build this website. Tried to implement a clean and simple responsive design.",
    images: ["/images/myportfolio.png"],
    link: "",
    linkText: "Github repository",
  },
];

const ProjectPage = () => {
  return (
    <div className="flex flex-col">
      <div className="lg:grid lg:grid-cols-3 flex flex-col flex-grow justify-between ">
        <div className="flex flex-col col-span-2 h-max p-8">
          <div className="md:hidden">
            <BurgerMenu />
          </div>
          <div className="hidden md:block">
            <NavBar />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-16 py-6 sm:py-12">
        <h1 className="font-bold text-5xl text-center mb-12">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="sm:grid sm:grid-rows-6 border rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl sm:row-span-1 font-bold">{project.title}</h2>
              <div className="flex flex-col sm:flex-row justify-between sm:row-span-3 mb-4 sm:mb-8">
                {project.images.map((image, index) => (
                  <div key={index} className="w-full py-2 sm:py-0 sm:p-2">
                    <Image
                      src={image}
                      alt={project.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col row-span-2 justify-between">
                <p className="text-gray-700 text-lg mb-8">
                  {project.description}
                </p>
                <Link href={project.link} passHref legacyBehavior>
                  <a
                    target="_blank"
                    className="text-[#417fd1] text-lg hover:underline"
                  >
                    {project.linkText}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
