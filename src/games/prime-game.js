import { generateRandomNumber } from "../helpers.js";
import engine from "../engine.js";

const mainRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (randomNumber) => {
      if (randomNumber < 2) {
        return "no";
      }
      if (randomNumber === 2) {
        return "yes";
      }
      for (let i = 2; i <= Math.sqrt(randomNumber); i++) {
        if (randomNumber % i === 0) {
          return "no";
        }
      }
      return "yes";
    };

const generateGameVariables = () => {
  const randomNumber = generateRandomNumber(1, 101);
  const mainQuestion = randomNumber;
  const correctAnswer = String(getPrime(randomNumber));
  return [correctAnswer, mainQuestion]
};

export default () => engine(mainRule, generateGameVariables);
