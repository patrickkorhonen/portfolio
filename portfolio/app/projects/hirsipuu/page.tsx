import { promises as fs } from "fs";
import GuessChar from "./guessChar";

const hirsipuuPage = async () => {
  const data = await fs.readFile("public/sanat.txt", "utf8");

  const randNum = Math.floor(Math.random() * 93086);

  const word = data.split("\n")[randNum];
  console.log(word);

  return (
    <div>
      <GuessChar word={word} />
    </div>
  );
};

export default hirsipuuPage;
