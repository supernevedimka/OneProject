import readlineSync from 'readline-sync';

export const greetUser = () => {
 console.log("Welcome to the Brain Games!")
 let name = readlineSync.question('Your answer: ');
 console.log('Hi, ' + name + '!');
 return name;
}




