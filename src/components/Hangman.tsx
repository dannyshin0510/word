import React, {useCallback, useEffect, useMemo, useState} from "react";
import { TextField, Button } from "@mui/material";
import { WordMap } from "./types";

// returns mapped object of target word in format of `{char:[posNum...]}`
const wordMapper = (word:string) => {
    console.log('wordMap')
    const map:Record<string,number[]> = {}
    let position = 0
    for (const char of word ){
        if (char in map){
            map.char?.push(position)
        }
        else {
            map[char]=[position]
        }
        position +=1
    }
    return map
}

interface StageProps {
    word: string;
    wordMap:WordMap
}

  
const Stage: React.FC<StageProps> = ({ word, wordMap }) => {
  //make the dash things that hide the letters.
  if (!word){
    return
  }
    const letters = word?.split('')
    const spaces = letters?.map((letter)=>{
        if (letter in wordMap){
            return '_ '
        } 
        console.log("ASD")
        return 'a'
    })
    return <>
        {spaces}
    </>
}

interface HangmanProps {
    targetWord: string;
    wordMap:WordMap
}


export const Hangman: React.FC<HangmanProps> = ({ targetWord, wordMap }) => {

    console.log("received", wordMap)
    return <>
        
      <Stage word={targetWord} wordMap={wordMap}/>
    </>
}
