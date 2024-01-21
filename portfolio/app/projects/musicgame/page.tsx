import React from "react";
import Image from "next/image";

const musicGame = async () => {
  const randomNumber = Math.floor(Math.random() * (18240511 - 520017) + 520017);
  const randomNumber2 = Math.floor(
    Math.random() * (18240511 - 520017) + 520017
  );

  const headers = {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "",
  };

  const response = await fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/track/${randomNumber}`,
    //"https://deezerdevs-deezer.p.rapidapi.com/track/12981151",
    {
      headers: headers,
    }
  );

  const response2 = await fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/track/${randomNumber2}`,
    //"https://deezerdevs-deezer.p.rapidapi.com/track/17202344",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  const result2 = await response2.json();

  return (
    <div className="bg-red-100 h-screen">
      <p className="text-center text-white drop-shadow-lg text-6xl font-bold p-10">
        WHOSE SONG IS THIS?
      </p>
      <div className="flex justify-center">
        <div className="text-center">
          <Image
            src={result.artist.picture_medium}
            alt="artist"
            width={250}
            height={250}
          />
          <div className="mt-4">
            <h1>{result.title}</h1>
            <h1>{result.artist.name}</h1>
          </div>
        </div>
        <p className="text-center pt-24 text-6xl font-bold mx-20">OR</p>
        <div className="text-center">
          <Image
            src={result2.artist.picture_medium}
            alt="artist"
            width={250}
            height={250}
          />
          <div className="mt-4">
            <h1>{result2.title}</h1>
            <h1>{result2.artist.name}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-4">
        <audio controls preload="auto" autoPlay>
          <source src={result.preview} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
};

export default musicGame;
