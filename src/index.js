const {
  randomWord,
  userGuessPrompt,
  validation,
  initBoard,
  getArrayState,
  getBodyPart,
  userWon,
  userLost,
} = require("./smallerfunctions");

const wordList = [
  "adventure",
  "butterfly",
  "champion",
  "diamond",
  "elephant",
  "festival",
  "galaxy",
  "harmony",
  "island",
  "jungle",
  "kingdom",
  "landscape",
  "mystery",
  "nightmare",
  "ocean",
  "pyramid",
  "rainbow",
  "treasure",
  "universe",
  "voyage",
];

const main = () => {
  let partsRemaining = getBodyPart();
  const word = randomWord(wordList);
  initBoard(word);
  let userInput = userGuessPrompt();
  let arrayState = getArrayState();
  validation(userInput, word); // First Validation
  arrayState = getArrayState();
  while (arrayState.includes("_") && partsRemaining !== 0) {
    userInput = userGuessPrompt();
    validation(userInput, word);
    arrayState = getArrayState();
    partsRemaining = getBodyPart();
  }
  if (partsRemaining === 0 && arrayState.includes("_")) {
    console.clear();
    userLost();
    console.log(`The word was ${word}`);
  } else {
    console.clear();
    userWon();
  }
};

main();
