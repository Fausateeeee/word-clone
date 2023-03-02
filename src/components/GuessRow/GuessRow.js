import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
function GuessRow({ word, answer }) {
  const properties = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span
            key={index}
            className={`cell ${!!properties ? properties[index].status : ""}`}
          >
            {!!word[index] ? word[index] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default GuessRow;
