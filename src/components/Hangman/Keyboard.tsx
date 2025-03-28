import React from "react";
import styled from "styled-components";
// I am going with format of modern keyboards for now. Ideas: maybe cooler way to input later
const KEYS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 10vh;
`;
const Row = styled.div`
  margin-top: 1vh;
`;
const KeyButton = styled.button`
  margin-left: 1vw;
  padding: 18px 25px;
  font-size: 1.5rem;
`;

interface KeyboardProps {
  disabled?: boolean;
  usedLetters: string[];
  addGuessedLetter: (letter: string) => void;
}

export const Keyboard: React.FC<KeyboardProps> = ({
  usedLetters,
  addGuessedLetter,
  disabled = false,
}) => {
  return (
    <Container>
      {KEYS.map((row, index) => (
        <Row key={index}>
          {row.map((key) => {
            const isUsed = usedLetters.includes(key);

            return (
              <KeyButton
                onClick={() => addGuessedLetter(key)}
                disabled={isUsed || disabled}
                key={key}
              >
                {key}
              </KeyButton>
            );
          })}
        </Row>
      ))}
    </Container>
  );
};
