import { generateRandomNumber } from "../helpers.js";
import engine from "../engine.js";

const mainRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (randomNumber1, randomNumber2) => {
    let a = randomNumber1;
    let b = randomNumber2;
    while (b !== 0) {
      let formula = a % b;
      a = b;
      b = formula;
    }
    return a;
  };

const generateGameVariables = () => {
  const randomNumber1 = generateRandomNumber(1, 101);
  const randomNumber2 = generateRandomNumber(1, 101);
  const mainQuestion = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(getGCD(randomNumber1, randomNumber2));
  return [correctAnswer, mainQuestion]
};

export default (userName) => engine(mainRule, generateGameVariables,userName);
