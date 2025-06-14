import readlineSync from 'readline-sync';
import { greetUser } from '../cli.js';

export const runBrainEven = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * 101);
  console.log("Question: " + randomNumber);
  const answerUser = readlineSync.question("Your answer: ");
  if (answerUser !== "yes" && answerUser !== "no") {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was no/yes.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (randomNumber % 2 === 0 && answerUser === "yes") {
      console.log("Correct!");
    } else if (randomNumber % 2 === 0 && answerUser === "no") {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`
      );
      return;
    } else if (randomNumber % 2 !== 0 && answerUser === "no") {
      console.log("Correct!");
    } else if (randomNumber % 2 !== 0 && answerUser === "yes") {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}