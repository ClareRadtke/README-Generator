"use strict";
const inquirer = require("inquirer");
const fs = require("fs");
const { licenses } = require("./data/licenses");
const { generateMarkdown } = require("./utils/markdown");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", message: "Project Title", name: "title", default: "My App" },
  { type: "input", message: "Provide a description", name: "description" },
  {
    type: "input",
    message: "Installation instructions",
    name: "installInstructions",
  },
  {
    type: "input",
    message: "How to run (please provide an example)",
    name: "runInstructions",
  },
  {
    type: "list",
    message: "Which license is being used",
    name: "license",
    choices: licenses.map((license) => license.name),
  },
  { type: "input", message: "Contribution information", name: "contributions" },
  { type: "input", message: "Test instructions", name: "testInstructions" },
  { type: "input", message: "Enter your email", name: "email" },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "How would you like to be contacted",
    name: "howToContact",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownFile = generateMarkdown(answers);
      writeToFile("README-sample", markdownFile);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error("tty error");
      } else {
        console.error(error);
      }
    });
}

// Function call to initialize app
init();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./${fileName}.md`, data, (err) => {
    if (err) console.error(err);
  });
}
