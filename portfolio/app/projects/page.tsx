import React from "react";
import Link from "next/link";

const projectPage = () => {
  return (
    <div className="grid grid-cols-1 mt-20 place-items-center sm:place-items-start  md:grid-cols-2 lg:grid-cols-4 ">
      <Link href="/projects/hirsipuu">
        <div className="w-screen">
        <div className="flex flex-col mx-4 sm:w-64 h-48 mb-6 border-2 rounded-lg shadow hover:border-4 hover:shadow-xl">
          <div className="p-3 w-full h-full rounded-t-lg bg-red-400"></div>
          <h1 className="p-3 w-full rounded-b-lg text-center">Hirsipuu</h1>
        </div>
        </div>
      </Link>
      <Link href="/projects/musicgame">
      <div className="w-screen">
        <div className="flex flex-col mx-4 sm:w-64 h-48 mb-6 border-2 rounded-lg shadow hover:border-4 hover:shadow-xl">
          <div className="p-3 w-full h-full rounded-t-lg bg-blue-400"></div>
          <h1 className="p-3 w-full rounded-b-lg text-center">Music Game</h1>
        </div>
        </div>
      </Link>
    </div>
  );
};

export default projectPage;
