
import fs from 'fs';

const word = () => {
    let word: String;
    fs.readFile("public/sanat.txt", "utf-8", (err: any, data: string) => {
        
        const randNum = Math.floor(Math.random() * 93086);

        word = data.split('\n')[randNum];
    })
    return word
}