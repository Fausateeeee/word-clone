import React from "react";

function GuessInput({ handleGuess, disabled }) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(currentGuess);
    handleGuess(currentGuess);
    setCurrentGuess("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input"> Enter guess:</label>
      <input
        disabled={disabled}
        required={true}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={currentGuess}
        onChange={(event) => setCurrentGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
