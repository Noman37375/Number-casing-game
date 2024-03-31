#! /usr/bin/env node
import inquirer from "inquirer";
const realNumber = Math.floor(Math.random()*10+1);
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please Guess a number between 1-10:",
  },
]);

if (answer.userGuessNumber === realNumber) {
  console.log("Congratulation ! You guessed the right number!");
} else {
  console.log(
    "You guessed the wrong  number! The correct number is " + realNumber
  );
}

