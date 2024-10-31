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
  "javascript",
  "interface",
  "function",
  "variable",
  "object",
  "programming",
  "callback",
  "algorithm",
  "asynchronous",
  "framework",
  "iteration",
  "prototype",
  "closure",
  "debugging",
  "syntax",
  "compiler",
  "inheritance",
  "database",
  "runtime",
  "recursion",
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
  if (partsRemaining === 0) {
    // CHECKING IF ITS 0 AGAIN FOR SOME REASON??? (IM TIRED AF)
    console.clear();
    userLost();
    console.log("\nBruh\n");
  } else {
    console.clear();
    userWon();
    console.log("\nYOU WIN!!\n");
  }
};

main();
