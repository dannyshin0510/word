// GamePage.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GameContainer } from "../components/GameContainer";
// bec2d5713452431492c2cd4d3bf7c5f9

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* Use hyphen for multi-word properties */
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px; /* padding is in pixels by default */
`;

const GamePage: React.FC = () => {
  //TODO:
  return <GameContainer />;
};

export default GamePage;
