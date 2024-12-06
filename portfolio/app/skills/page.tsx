import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import BurgerMenu from "../components/BurgerMenu";


const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", image: "/images/js.png", width: "30%" },
      { name: "TypeScript", image: "/images/ts.png", width: "30%" },
      { name: "Python", image: "/images/python.png", width: "30%" },
      { name: "Scala", image: "/images/scala.png", width: "30%" },
      { name: "HTML", image: "/images/html.png", width: "30%" },
      { name: "CSS", image: "/images/css.png", width: "30%" },
      { name: "SQL", image: "/images/sql.png", width: "60%" },
    ],
  },
  {
    category: "Languages that I have used but am not fluent in",
    items: [
      { name: "Java", image: "/images/java.png", width: "30%" },
      { name: "C++", image: "/images/cpp.png", width: "30%" },
      { name: "Rust", image: "/images/rust.png", width: "30%" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", image: "/images/react.png", width: "30%" },
      { name: "Next.js", image: "/images/nextjs.png", width: "30%" },
      { name: "SolidJS", image: "/images/solidjs.png", width: "30%" },
      { name: "shadcn/ui", image: "/images/shadcn.png", width: "30%" },
      { name: "TailwindCSS", image: "/images/tailwind.png", width: "50%" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", image: "/images/nodejs.png", width: "50%" },
      { name: "Express.js", image: "/images/expressjs.png", width: "30%" },
      { name: "PostgreSQL", image: "/images/postgresql.png", width: "30%" },
      { name: "MongoDB", image: "/images/mongodb.png", width: "30%" },
      { name: "Prisma", image: "/images/prisma.png", width: "25%" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", image: "/images/git.png", width: "30%" },
      { name: "GitHub", image: "/images/github.png", width: "30%" },
      { name: "VSCode", image: "/images/vscode.png", width: "30%" },
      { name: "Postman", image: "/images/postman.png", width: "30%" },
      { name: "Docker", image: "/images/docker.png", width: "30%" },
    ],
  },
];


const SkillsPage = () => {
  return (
    <div className="flex flex-col w-screen">
      <div className="lg:grid lg:grid-cols-3 flex flex-col flex-grow justify-between">
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
        <h1 className="font-bold text-5xl text-center mb-12">Skills</h1>
        <div className="lg:grid lg:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skillCategory) => (
            <div key={skillCategory.category}>
              <h2 className="text-2xl font-bold mt-8 mb-4">
                {skillCategory.category}
              </h2>
              <div className="grid sm:grid-cols-2 gap-1 ">
                {skillCategory.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col border rounded-lg shadow-lg p-4"
                  >
                    <div className="grid grid-cols-2 h-full">
                      <p className="text-xl my-auto">{skill.name}</p>
                      <div className="flex flex-row gap-1 justify-end">
                        {skill && (
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ height: "auto", width: skill.width }}
                            className="rounded-lg"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-1 mt-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Other</h2>
              <div>
                <div className="flex flex-col gap-2">
                  <p className="text-xl my-auto">Scrum</p>
                  <p className="text-xl my-auto">REST APIs</p>
                  <p className="text-xl my-auto">Vercel</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Soft skills</h2>
              <div className="flex flex-col gap-2">
                <p className="text-xl my-auto">Teamwork</p>
                <p className="text-xl my-auto">Problem-solving</p>
                <p className="text-xl my-auto">Communication</p>
                <p className="text-xl my-auto">Adaptability</p>
                <p className="text-xl my-auto">Creativity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
