import readlineSync from "readline-sync";
import { greetUser } from "../cli.js";

export const runBrainProgreesion = () => {
  const name = greetUser();
  console.log("What number is missing in the progression?");
  for (let i = 0; i < 3; i++) {
    const progres10 = [];
    const randomNumber = Math.floor(Math.random() * 101) + 1;
    const step = Math.floor(Math.random() * 11) + 1;
    console.log(step);
    for (let j = 0; j < 10; j++) {
      progres10.push(randomNumber + j * step);
    }
    let indexToChange = Math.floor(Math.random() * 9) + 1;
    let newChar = "..";
    progres10.splice(indexToChange, 1, newChar);
    console.log("Question: " + progres10.join(" "));
    const answerUser = readlineSync.question("Your answer: ");
    if (Number(answerUser) === step) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${step}'. \n Let's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
