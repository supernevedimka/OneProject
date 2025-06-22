import readlineSync from "readline-sync";

export const generateRandomNumber = (fromNumber, toNumber) => {
  const randomNumber = Math.floor(Math.random() * toNumber) + fromNumber;
  return randomNumber;
};

export const greetUser = () => {
  console.log("May I have your name?");
  const name = readlineSync.question("Your answer: ");
  console.log(`Hi,${name}!\nSelect the game you want to play.`);
  return name;
};

const displayGameOptions = () => {
  const options = ["Calcucalculator", "Even", "GCD", "Prime", "Progression"];
  const index = readlineSync.keyInSelect(
    options,
    "Enter here the number of the game you want to play:"
  );
  return index;
};

export const processMenuChoice = (
  calcucalculator,
  even,
  gcd,
  prime,
  progression,
  userName
) => {
  const index = displayGameOptions();
  switch (index) {
    case 0:
      calcucalculator(userName);
      break;
    case 1:
      even(userName);
      break;
    case 2:
      gcd(userName);
      break;
    case 3:
      prime(userName);
      break;
    case 4:
      progression(userName);
      break;
    case -1:
      console.log("You haven't chosen the game. Goodbye!");
      break;
  }
};
