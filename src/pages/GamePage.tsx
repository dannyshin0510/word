// GamePage.tsx
import React, {useEffect, useState} from 'react';
import { Button, Typography } from '@mui/material';
import { HangmanContainer } from '../components/HangmanContainer';
import { createNewsClient, ListArticles } from '../services/newsClient';
// bec2d5713452431492c2cd4d3bf7c5f9


const GamePage: React.FC = () => {
  const [articles, setArticles]= useState<ListArticles|null>(null)
  const [error, setError]= useState<string|null>(null)
  const [word, setWord]= useState<string>('')
  // fetch articles and gets word of day
  useEffect(()=>{
    const listArticles = async () => {
      const newsClient = createNewsClient()
      const dailyArticles = await newsClient.getDailyNews()
      console.log("consumed in game page", dailyArticles)
      if ("error" in dailyArticles){
        setError(dailyArticles.error)
      } else {
        console.log("consumed in game page", dailyArticles.articles)
        setArticles(dailyArticles)
        const title = dailyArticles.articles[0].title
        console.log(title.split(' ')[0])
        // TODO: smarter way to select word
        setWord(title.split(' ')[0])
      }
    }
    listArticles()

  }, [])
  
  
  return (
    <div>
      <Typography variant="h2">Contact Us</Typography>
      <Button variant="contained" color="primary" href="/">
        Go Back to Home Page
      </Button>
      <HangmanContainer/>
    </div>
  );
};

export default GamePage;
