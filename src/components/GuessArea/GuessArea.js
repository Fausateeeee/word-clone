import React from "react";
import GuessRow from "../GuessRow/GuessRow";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessArea({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <GuessRow
            key={index}
            answer={answer}
            word={!!guessList[index] ? guessList[index] : ""}
          />
        );
      })}
    </div>
  );
}

export default GuessArea;
