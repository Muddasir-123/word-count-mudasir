#! usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter a Sentence to count words.",
        type: "input",
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your word count is ${words.length} words`);
