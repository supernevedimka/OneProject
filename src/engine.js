import readlineSync from 'readline-sync';

export default (mainRule,generateGameVariables,userName) => {
  console.log(mainRule)
  const countRounds = 3;
for (let i = 0; i < countRounds; i++) {
  const [correctAnswer, mainQuestion] = generateGameVariables();
  console.log("Question: " + mainQuestion)
  const answerUser = readlineSync.question("Your answer: ")
  if (answerUser === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`
      );
      return;
    }
  }
   console.log(`Congratulations, ${userName}!`);
};