import readlineSync from "readline-sync";
import { greetUser } from "../cli.js";

export const runBrainPrime = () => {
  const name = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log("Question: " + randomNumber);
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
    const correctAnswer = getPrime(randomNumber);
    const answerUser = readlineSync.question("Your answer: ");
    if (answerUser.toLowerCase() === correctAnswer) {
      console.log("Correct!");
    } else if (answerUser !== correctAnswer) {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
