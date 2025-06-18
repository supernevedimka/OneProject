import readlineSync from 'readline-sync';

export const greetUser = () => {
 console.log("May I have your name?")
 let name = readlineSync.question('Your answer: ');
 console.log('Hi, ' + name + '!');
 return name;
}




