import readlineSync from 'readline-sync';
import { greetUser } from '../cli.js';

export const runBrainCalc = () => {
  const name = greetUser();
  console.log("What is the result of the expression?");
  for (let i = 0; i < 3; i++) {
    const randomNumber1 = Math.floor(Math.random() * 101);
    const randomNumber2 = Math.floor(Math.random() * 101);
    const symbols = ["+", "-", "*"];
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const randomSymbol = symbols[randomIndex];
    const randomMathFormula = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
    console.log("Question: " + randomMathFormula);
    let result;
    switch (randomSymbol) {
      case "+":
        result = randomNumber1 + randomNumber2;
        break;
      case "-":
        result = randomNumber1 - randomNumber2;
        break;
      case "*":
        result = randomNumber1 * randomNumber2;
        break;
    }
    console.log(result);
    const answerUser = readlineSync.question("Your answer: ");
    if (Number(answerUser) === result) {
      console.log("Correct!");
    } else if (Number(answerUser) !== result) {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${result}'. \n Let's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};