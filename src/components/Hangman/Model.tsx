import { HANGMAN_PARTS, PLATFORM } from "./HangmanSVG";
import { styled } from "styled-components";
interface HangmanDrawingProps {
  wrongGuesses: number;
}
const Container = styled.div`
  margin-bottom: 3vw;
`;

export const Model: React.FC<HangmanDrawingProps> = ({ wrongGuesses }) => {
  return (
    <Container>
      <svg height="100%" width="300" viewBox="0 0 300 200">
        {PLATFORM}
        {HANGMAN_PARTS.slice(0, wrongGuesses)}
      </svg>
    </Container>
  );
};
