import { generateRandomNumber } from "../helpers.js";
import engine from "../engine.js";

const operators = ["+", "-", "*"];
const mainRule = 'What is the result of the expression?';

const calculate = (randomNumber1, randomNumber2, randomOperator) => {
  switch (randomOperator) {
    case "+":
      return randomNumber1 + randomNumber2;
    case "-":
      return randomNumber1 - randomNumber2;
    case "*":
      return randomNumber1 * randomNumber2;
  }
};

const generateGameVariables = () => {
  const randomNumber1 = generateRandomNumber(1, 101);
  const randomNumber2 = generateRandomNumber(1, 101);
  const randomOperator = operators[generateRandomNumber(0, operators.length)];
  const mainQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = String(calculate(randomNumber1, randomNumber2, randomOperator));
  return [correctAnswer, mainQuestion]
};

export default (userName) => engine(mainRule, generateGameVariables,userName);
