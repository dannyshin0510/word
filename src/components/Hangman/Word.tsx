import React from "react";
import styled from "styled-components";

interface HangmanWordProps {
  word: string;
  guessedLetters: string[];
  reveal?: boolean;
}

const WordContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  gap: 3vw;
`;

const Letter = styled.div`
  width: 1vw;
`;

export const Word: React.FC<HangmanWordProps> = ({
  word,
  guessedLetters,
  reveal = false,
}) => {
  return (
    <WordContainer>
      {word.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter) || letter === " ";
        return (
          <Letter key={index}>{isGuessed || reveal ? letter : "_"}</Letter>
        );
      })}
    </WordContainer>
  );
};
