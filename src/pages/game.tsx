import React, { useState } from 'react';

const gameData = [
  {
    sentence: 'The {{}} brown fox {{}} over the lazy {{}} .',
    answers: ['quick', 'jumps', 'dog'],
  },
  {
    sentence: 'I {{}} my coffee {{}} in the morning.',
    answers: ['enjoy', 'everyday'],
  },
  {
    sentence: 'React {{}} a JavaScript {{}} library.',
    answers: ['is', 'UI'],
  },
];

const Game = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [userInputs, setUserInputs] = useState(Array(gameData.length).fill(''));

  const handleInputChange = (index, event) => {
    const updatedInputs = [...userInputs];
    updatedInputs[index] = event.target.value;
    setUserInputs(updatedInputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check user answers
    const currentSentence = gameData[sentenceIndex];
    const isCorrect = currentSentence.answers.every(
      (answer, index) => answer.toLowerCase() === userInputs[index].toLowerCase(),
    );
    alert(isCorrect ? 'Correct!' : 'Incorrect!');
  };

  const handleNextSentence = () => {
    if (sentenceIndex < gameData.length - 1) {
      setSentenceIndex(sentenceIndex + 1);
    } else {
      // Game completion logic
      alert('Congratulations! You completed the game!');
    }
  };

  const currentSentence = gameData[sentenceIndex];

  return (
    <div>
      <h1>Fill in the Blanks</h1>
      <form onSubmit={handleSubmit}>
        <p>
          {currentSentence.sentence.split(' ').map((word, index) => {
            if (word === '{{}}') {
              return (
                <input
                  key={index}
                  type="text"
                  value={userInputs[index]}
                  onChange={(event) => handleInputChange(index, event)}
                  required
                />
              );
            } else {
              return <span key={index}>{word} </span>;
            }
          })}
        </p>
        <button type="submit">Check</button>
        <button onClick={handleNextSentence}>Next</button>
      </form>
    </div>
  );
};

export default Game;
