import { generateRandomNumber } from "../helpers.js";
import engine from "../engine.js";

const mainRule = "What number is missing in the progression?";

const getProg = (start, length,step) => {
  const progression = [];
  for (let j = 0; j < length; j++) {
    progression.push(start + j * step);
  }
  return progression;
};
const generateGameVariables = () => {
  const start = generateRandomNumber(1, 101);
  const step = generateRandomNumber(1, 11);
  const length = 10;
  const progression = getProg(start, length, step);
  const indexToChange = generateRandomNumber(0, length - 1);
  const correctAnswer = String(progression[indexToChange]);
  progression[indexToChange] = "..";
  const mainQuestion = progression.join(" ");
  return [correctAnswer, mainQuestion];
};


export default () => engine(mainRule, generateGameVariables);

