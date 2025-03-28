import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Model } from "./Hangman/Model";
import { Keyboard } from "./Hangman/Keyboard";
import { Word } from "./Hangman/Word";
import { createNewsClient } from "../services/newsClient";
import { Button, Snackbar } from "@mui/material";
import { SuccessModal } from "./SuccessModal";
import { FailModal } from "./FailModal copy";

const ALLOWED_ATTEMPTS = 5;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
`;

export const GameContainer: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [url, setUrl] = useState<string>("#");
  const [description, setDescription] = useState<string>("");

  const [gameOver, setGameOver] = useState<boolean>(false);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [openWin, setOpenWin] = useState<boolean>(false);
  const [openFail, setOpenFail] = useState<boolean>(false);
  const [openHint, setOpenHint] = useState<boolean>(false);

  useEffect(() => {
    const listArticles = async () => {
      const newsClient = createNewsClient();
      const dailyArticles = await newsClient.getDailyNews();
      if ("error" in dailyArticles) {
        console.log(dailyArticles.error);
      } else {
        const articleItems = dailyArticles.articles.map((article: any) => ({
          title: article.title || "",
          description: article.description || "",
          url: article.url || "",
        }));
        const chosenArticle =
          articleItems[Math.floor(Math.random() * articleItems.length)];

        const fullText = `${chosenArticle.title} ${chosenArticle.description}`;
        const words = fullText
          .replace(/[^\w\s]/gi, "")
          .split(/\s+/)
          .filter((word) => word.length > 3 && word.length < 12)
          .map((word) => word.toLowerCase());

        if (words.length > 0) {
          const randomWord = words[Math.floor(Math.random() * words.length)];
          console.log("dont cheat ...", randomWord);
          setWord(randomWord);
          setUrl(chosenArticle.url);
          setDescription(chosenArticle.title);
        }
      }
    };
    listArticles();
  }, []);

  const handleGuessedLetter = useCallback(
    (letter: string) => {
      setGuessedLetters([...guessedLetters, letter]);
      // wrong case
      if (!word.includes(letter)) {
        console.log("wrong guess", wrongGuesses);
        setWrongGuesses(wrongGuesses + 1);
      }
    },
    [wrongGuesses, word, guessedLetters]
  );

  const handleHintOpen = useCallback(() => {
    setOpenHint(true);
  }, []);
  const handleHintClose = useCallback(() => {
    setOpenHint(false);
  }, []);

  const handleWinClose = useCallback(() => setOpenWin(false), []);
  const handleFailClose = useCallback(() => setOpenFail(false), []);

  useEffect(() => {
    if (wrongGuesses > ALLOWED_ATTEMPTS) {
      //lost
      setGameOver(true);
      setOpenFail(true);
    } else {
      if (
        guessedLetters.length &&
        word.split("").every((char) => guessedLetters.includes(char))
      ) {
        //win
        setOpenWin(true);
      }
    }
  }, [guessedLetters, wrongGuesses, word]);

  return (
    <Container>
      <Model wrongGuesses={wrongGuesses} />
      <SuccessModal
        handleClose={handleWinClose}
        open={openWin}
        word={word}
        description={description}
        url={url}
      />
      <FailModal
        handleClose={handleFailClose}
        open={openFail}
        word={word}
        description={description}
        url={url}
      />

      <Word word={word} guessedLetters={guessedLetters} reveal={gameOver} />
      <Keyboard
        usedLetters={guessedLetters}
        addGuessedLetter={handleGuessedLetter}
      />
      <Button
        variant="text"
        size="small"
        sx={{ textTransform: "none", color: "white", marginTop: "5vh" }}
        onClick={handleHintOpen}
      >
        hint
      </Button>
      <Snackbar
        open={openHint}
        autoHideDuration={4000}
        onClose={handleHintClose}
        message={`hint: word starts with '${word[0]}' bruh..`}
      />
    </Container>
  );
};
