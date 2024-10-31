const prompt = require("prompt-sync")();

let arrayState = [];
let bodyParts = 7;
let hanger = [
  [, , , , , , , , ,],
  [, "┌", "─", "─", "─", "─", "─", , ,],
  [, "│", , , , , , , ,],
  [, "│", , , , , , , ,],
  [, "│", , , , , , , ,],
  [, "│", , , , , , , ,],
  [, "│", , , , , , , ,],
];

const randomWord = (wordsArray) => {
  let i = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[i];
};

const initBoard = (word) => {
  [...word].forEach((element) => {
    element = "_";
    arrayState.push(element);
  });
  updateHanger();
  return console.log(`\n${joinArr(arrayState)}\n`);
};

const getArrayState = () => {
  return joinArr(arrayState);
};

const userGuessPrompt = () => {
  let userInput = prompt(
    `What is your guess (Attempts Remaining - ${bodyParts}): `
  );
  console.clear(); // After every guess we clear the console :)
  removeBodyPart();
  updateHanger();
  return userInput;
};

const validation = (userInput, word) => {
  for (let i = 0; i < word.length; i++) {
    if (userInput.includes(word[i])) {
      arrayState.splice(i, 1, word[i]);
    }
  }
  console.log(`\n${joinArr(arrayState)}\n`);
};

const updateHanger = () => {
  switch (bodyParts) {
    case 7:
      hanger[3].splice(4, 1, "PLAY NOW");
      break;
    case 6:
      hanger[3].splice(4, 1, ""); // Remove PLAY NOW
      hanger[2].splice(4, 1, "😀");
      break;
    case 5:
      hanger[3].splice(4, 1, "|");
      hanger[2].splice(4, 1, "😅");
      break;
    case 4:
      hanger[2].splice(4, 1, "");
      hanger[3].splice(3, 1, "/");
      hanger[2].splice(5, 1, "😳");
      break;
    case 3:
      hanger[3].splice(6, 1, "\\");
      hanger[2].splice(5, 1, "😰");
      break;
    case 2:
      hanger[4].splice(4, 1, "|");
      break;
    case 1:
      hanger[4].splice(5, 1, "|");
      hanger[2].splice(5, 1, "🤬");
      break;
  }
  for (let i = 0; i < hanger.length; i++) {
    if (i === 1) {
      console.log(" " + hanger[i].join(""));
      continue;
    }
    console.log(joinArr(hanger[i]));
  }
};

const removeBodyPart = () => {
  bodyParts--;
};

const getBodyPart = () => {
  return bodyParts;
};

const joinArr = (arr) => {
  return arr.join(" ");
};

const userWon = () => {
  for (let i = 0; i < hanger.length; i++) {
    if (i === 1) {
      console.log(" " + hanger[i].join(""));
      continue;
    }
    for (let j = 0; j < hanger[i].length; j++) {
      if (
        hanger[i][j] &&
        hanger[i][j] !== "│" &&
        hanger[i][j] !== "-" &&
        hanger[i][j] !== "┌"
      ) {
        hanger[i][j] = "";
      }
    }
    hanger[4].splice(5, 1, "😄");
    hanger[5].splice(4, 1, "|");
    hanger[4].splice(6, 1, "/");
    hanger[5].splice(3, 1, "/");
    hanger[6].splice(4, 1, "|");
    hanger[6].splice(5, 1, "|");
    console.log(joinArr(hanger[i]));
  }
  console.log("\nYOU WIN!!\n");
};

const userLost = () => {
  for (let i = 0; i < hanger.length; i++) {
    if (i === 1) {
      console.log(" " + hanger[i].join(""));
      continue;
    }
    for (let j = 0; j < hanger[i].length; j++) {
      if (
        hanger[i][j] &&
        hanger[i][j] !== "│" &&
        hanger[i][j] !== "-" &&
        hanger[i][j] !== "┌"
      ) {
        hanger[i][j] = "";
      }
    }

    hanger[6].splice(8, 1, "🥀");
    hanger[6].splice(5, 1, "🪦");
    console.log(joinArr(hanger[i]));
  }
  console.log("\nBruh\n");
};

module.exports = {
  randomWord,
  userGuessPrompt,
  validation,
  initBoard,
  getArrayState,
  getBodyPart,
  userWon,
  userLost,
};
