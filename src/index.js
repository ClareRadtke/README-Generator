const inquirer = require("inquirer");
const fs = require("fs");
const { licenses } = require("./data/licenses");
// const generateMarkdown = require("./utils/generateMarkdown");

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

function questionsPrompt() {
  console.log("questionsPrompt start");
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log("answers should print");
      const markdownFile = generateMarkdown(answers);
      writeToFile("READMEtest", markdownFile);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error("tty error");
      } else {
        console.error(error);
      }
    });
}

questionsPrompt();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./${fileName}.md`, data, (err) => {
    if (err) console.error(err);
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

function renderLicenseBadge(inputLicense) {
  if (inputLicense === "no license") {
    return "";
  }
  const license = licenses.find((license) => inputLicense === license.name);
  return license.badge ?? "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(inputLicense) {
  if (inputLicense === "no license") {
    return "";
  }
  const license = licenses.find((license) => inputLicense === license.name);
  return license.link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(inputLicense) {
  if (inputLicense != "no license") {
    return `## License  
This project is licensed under the terms of the [${inputLicense} license](${renderLicenseLink(
      inputLicense
    )}).`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(opts) {
  return `# ${opts.title}

${opts.description}

${renderLicenseBadge(opts.license)}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
${opts.installInstructions}

## Usage
${opts.runInstructions}

${renderLicenseSection(opts.license)}

## Contributing
${opts.contributions}

## Tests
${opts.testInstructions}

## Questions
${opts.howToContact}  
[${opts.email}](mailto:${opts.email}?subject=Github%20${opts.title}%20Query)  
GitHub: [${opts.githubUsername}](https://github.com/${opts.githubUsername})
`;
}
