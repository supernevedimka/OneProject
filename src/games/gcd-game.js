import readlineSync from "readline-sync";
import { greetUser } from "../cli.js";

export const runBrainGcd = () => {
  const getGCD = (randomNumberA, randomNumberB) => {
    let a = randomNumberA;
    let b = randomNumberB;
    while (b !== 0) {
      let formula = a % b;
      a = b;
      b = formula;
    }
    return a;
  };
  const name = greetUser();
  console.log("Find the greatest common divisor of given numbers.");
  for (let i = 0; i < 3; i++) {
    const randomNumberA = Math.floor(Math.random() * 101);
    const randomNumberB = Math.floor(Math.random() * 101);
    const randomMathFormula = `${randomNumberA} ${randomNumberB}`;
    console.log("Question: " + randomMathFormula);
    const correctAnswer = getGCD(randomNumberA, randomNumberB);
    const answerUser = readlineSync.question("Your answer: ");
    if (Number(answerUser) === correctAnswer) {
      console.log("Correct!");
    } else if (Number(answerUser) !== correctAnswer) {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
