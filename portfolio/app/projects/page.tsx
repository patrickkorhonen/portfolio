import React from "react";
import Link from "next/link";

const projectPage = () => {
  return (
    <div className="flex m-20">
      <Link href="/projects/hirsipuu">
        <div className="flex flex-col justify-end items-center w-64 h-48 mr-20 border-2 rounded-lg shadow hover:border-4 hover:shadow-xl">
          <h1 className="p-3 w-full h-full rounded-t-lg bg-red-400"></h1>
          <h1 className="p-3 w-full rounded-b-lg text-center">Hirsipuu</h1>
        </div>
      </Link>
      <Link href="/projects">
        <div className="flex flex-col justify-end items-center w-64 h-48 mr-20 border-2 rounded-lg shadow hover:border-4 hover:shadow-xl">
          <h1 className="p-3 w-full h-full rounded-t-lg bg-blue-400"></h1>
          <h1 className="p-3 w-full rounded-b-lg text-center">Coming soon</h1>
        </div>
      </Link>
    </div>
  );
};

export default projectPage;
