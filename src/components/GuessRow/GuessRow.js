import React from "react";
import { range } from "../../utils";
function GuessRow({ word }) {
  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span key={index} className="cell">
            {!!word[index] ? word[index] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default GuessRow;
