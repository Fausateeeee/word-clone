import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessArea from "../GuessArea/GuessArea";
import Banner from "../Banner/Banner";

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

  const hasWon = answer === guessList[guessList.length - 1];
  const hasLost = !hasWon && guessList.length === NUM_OF_GUESSES_ALLOWED;

  console.log({ hasWon });
  const WinningMessage = () => {
    return (
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessList.length} guesses</strong>.;
      </p>
    );
  };

  const LosingMessage = () => {
    return (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );
  };
  return (
    <>
      <GuessArea guessList={guessList} answer={answer} />
      <GuessInput handleGuess={handleNewGuess} disabled={hasWon || hasLost} />
      {hasWon && (
        <Banner bannerStyle="happy">
          <WinningMessage />
        </Banner>
      )}
      {hasLost && (
        <Banner bannerStyle="sad">
          <LosingMessage />{" "}
        </Banner>
      )}
    </>
  );
}

export default Game;
