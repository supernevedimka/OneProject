import { generateRandomNumber } from "../helpers.js";
import engine from "../engine.js";

const mainRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const generateGameVariables = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const mainQuestion = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, mainQuestion];
};

export default (userName) => engine(mainRule, generateGameVariables,userName);

