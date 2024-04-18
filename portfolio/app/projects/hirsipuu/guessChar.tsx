"use client";
import React, { use, useState } from "react";
import { promises as fs } from "fs";
import { useEffect } from "react";

const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö']

const getDistinct = (array: string[]) => (
	array.filter((currentValue, index, arr) => (
		arr.indexOf(currentValue) === index
	))
)

const GuessChar = () => {

  const [word, setWord] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/sanat.txt");
      const text = await response.text();
      const words = text.split("\n");
      const randomIndex = Math.floor(Math.random() * words.length);
      setWord(words[randomIndex]);
    };
  
    fetchData();
  }, []);
  

  const [GuessAmount, setGuessAmount] = useState(7)

  const handleGuess = (char: string) => {
    if (charArray.includes(char.toLowerCase())) {
      setGuessed(guessed.concat(char))
    } else {
      setGuessAmount(GuessAmount - 1)
      setGuessedWrong(guessedWrong.concat(char))
    }
  }

  const charArray: string[] = word.split('').slice(0, -1)

  const distinctCharArray = getDistinct(charArray.filter((n) => n != '-'))

  const [guessed, setGuessed] = useState<string[]>([]);

  const [guessedWrong, setGuessedWrong] = useState<string[]>([]);

  return (
    <div>
      <div className="flex mt-56 max-[1900px]:mt-40 mb-12 max-[1900px]:mb-6 justify-center items-center">
      <div className="text-center text-5xl max-[1000px]:text-3xl max-[1900px]:text-3xl uppercase">
        <ul className='flex gap-3'>
          {charArray.map((c, index) => (
            <div key={index}>
            {guessed.includes(c.toUpperCase()) ? (
            <li className='flex flex-col w-12 max-[1900px]:w-7 max-[1000px]:w-5'>
              <p className="-m-4">{c}</p>
              <p>—</p>
              </li>
            ) : c == '-' ? (
              <li className='flex flex-col w-12 max-[1900px]:w-7 max-[1000px]:w-5'>
              <p className="-m-4">-</p>
              </li>
            ) : (
              <li className='flex flex-col w-12 max-[1900px]:w-7 max-[1000px]:w-5'>
              <p className="invisible -m-4">{c}</p>
              <p>—</p>
              </li>
            )}
              </div>
          ))}
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-6 md:grid-cols-12 gap-1 w-max mx-auto text-center">
      {chars.map((c) => (
        <div key={c}>
          {guessed.includes(c) ? (
            <button
              className="text-4xl border-4 h-20 w-20 max-[1900px]:border-2 max-[1900px]:h-14 max-[1900px]:w-14 text-green-500 border-green-500 rounded-md hover:bg-slate-300"
            >
              {c}
            </button>
          ) : guessedWrong.includes(c) ? (
            <button
              className="text-4xl border-4 h-20 w-20 max-[1900px]:border-2 max-[1900px]:h-14 max-[1900px]:w-14 text-red-600 border-red-600 rounded-md hover:bg-slate-300"
            >
              {c}
            </button>
          ) : guessed.length == distinctCharArray.length ? (
            <button
              className="text-4xl border-4 h-20 w-20 max-[1900px]:border-2 max-[1900px]:h-14 max-[1900px]:w-14 border-black rounded-md bg-slate-300"
            >
              {c}
            </button>
          
          ) : GuessAmount > 0 ? (
            <button
              onClick={() => handleGuess(c)}
              className="text-4xl border-4 h-20 w-20 max-[1900px]:border-2 max-[1900px]:h-14 max-[1900px]:w-14 border-black rounded-md hover:bg-slate-300"
            >
              {c}
            </button>
           ) : (
            <button
              className="text-4xl border-4 h-20 w-20 max-[1900px]:border-2 max-[1900px]:h-14 max-[1900px]:w-14 border-black rounded-md bg-slate-300"
            >
              {c}
            </button>
          )
          }
        </div>
      ))}
    </div>
    <div>
      {guessed.length == distinctCharArray.length ? (
        <div>
          <div className="text-center">
        <p className="font-medium mt-10 max-[1900px]:mt-6 text-xl">VOITIT PELIN!</p>
        <button className="border-4 border-sky-300 p-4 mt-4 rounded-xl bg-sky-300 hover:border-sky-400" onClick={() => window.location.reload()}>UUSI PELI
        </button>
        </div>
        </div>
      ) : GuessAmount > 0 ? (
        <div className="text-center">
      <p className="font-medium mt-10 max-[1900px]:mt-6 text-xl">VÄÄRIÄ ARVAUKSIA JÄLJELLÄ: {GuessAmount}</p>
      <button className="border-4 border-sky-300 p-4 mt-4 rounded-xl bg-sky-300 hover:border-sky-400" onClick={() => window.location.reload()}>UUSI PELI
        </button>
        </div>
      ) : (
        <div className="text-center">
        <p className="font-medium mt-10 max-[1900px]:mt-6 text-xl">HÄVISIT PELIN</p>
        <p className="mt-2">Oikea sana oli: {word}</p>
        <button className="border-4 border-sky-300 p-4 mt-4 rounded-xl bg-sky-300 hover:border-sky-400" onClick={() => window.location.reload()}>UUSI PELI
        </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default GuessChar;
