import React, {useCallback, useEffect, useMemo, useState} from "react";
import { TextField, Button } from "@mui/material";
import { WordMap } from "./types";
import { Hangman } from "./Hangman";

// returns mapped object of target word in format of `{char:[posNum...]}`
const wordMapper = (word:string) => {
    console.log('wordMap')
    const map:WordMap = {}
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



export const HangmanContainer: React.FC =() => {
    const targetWord = 'hello'
    const maxAttempts = 6
    const [attempts, setAttempts] = useState(0)
    const [guess, setGuess] = useState('')
    const [char, setChar] = useState('')
    const [error, setError] = useState(false)
    const [wordMap, setWordMap] = useState(wordMapper(targetWord))
    
    
    
    


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length>1){ //more than 1 char
            setError(true)
        } else if (error===true && e.target.value.length<=1){ //1 char
            setError(false)
        }
        setGuess(e.target.value)
     };

    const handleSubmit = () => {
          setChar(guess);
          if(guess in wordMap){ //good guess

            const letters = wordMap
            delete letters[guess]
            setWordMap(letters)

        } else  { //bad guess
            setAttempts(attempts+1); 
        }
     
    };


    return <>
        <TextField helperText={error&& 'Only 1 letter allowed.'} error={error} id="standard-basic" label="I guess..." variant="standard" value={guess} color="success" onChange={handleChange} />
        <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>  
      <Hangman targetWord={targetWord} wordMap={wordMap}/>
    </>
}
