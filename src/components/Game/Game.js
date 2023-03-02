import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessArea from "../GuessArea/GuessArea";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const handleNewGuess = (currentGuess) => {
    const nextGuessList = [...guessList, currentGuess];
    setGuessList(nextGuessList);
  };
  return (
    <>
      <GuessArea guessList={guessList} />
      <GuessInput handleGuess={handleNewGuess} />
    </>
  );
}

export default Game;
