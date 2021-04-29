const inquirer = require("inquirer");
const { licenses } = require("./data/licenses");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  //turn into objects
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
// TODO: Create a function to write README file
function questionsPrompt() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    generateREADME(answers);
  });
}
questionsPrompt();
// TODO Testing
function generateREADME(opts) {
  fs.writeFile(
    "./READMEtest.md",
    `# ${opts.title}

  ${opts.description}
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
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
  
  ## License
  This project is licensed under the terms of the ${opts.license} license.
  
  ## Contributing
  ${opts.contributions}
  
  ## Tests
  ${opts.testInstructions}
  
  ## Questions
  ${opts.howToContact}
  ${opts.email}
  ${opts.githubUsername}
  `,
    (err) => {
      if (err) console.error(err);
    }
  );
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'password',
//       message: 'What is your password?',
//       name: 'password',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );

//`This project is licensed under the terms of the ${ } license`.
// Licenses:
// "Academic Free License v3.0"
// "Apache license 2.0"
// "Artistic license 2.0"
// "Boost Software License 1.0"
// "BSD 2-clause 'Simplified' license"
// "BSD 3-clause 'New' or 'Revised' license"
// "BSD 3-clause Clear licens"e
// "Creative Commons license family"
// "Creative Commons Zero v1.0 Universal"
// "Creative Commons Attribution 4.0"
// "Creative Commons Attribution Share Alike 4.0"
// "Do What The F*ck You Want To Public License"
// "Educational Community License v2.0"
// "Eclipse Public License 1.0"
// "Eclipse Public License 2.0"
// "European Union Public License 1.1"
// "GNU Affero General Public License v3.0"
// "GNU General Public License family"
// "GNU General Public License v2.0"
// "GNU General Public License v3.0"
// "GNU Lesser General Public License family"
// "GNU Lesser General Public License v2.1"
// "GNU Lesser General Public License v3.0"
// "ISC"
// "LaTeX Project Public License v1.3c"
// "Microsoft Public License"
// "MIT"
// "Mozilla Public License 2.0"
// "Open Software License 3.0"
// "PostgreSQL License"
// "SIL Open Font License 1.1"
// "University of Illinois/NCSA Open Source License"
// "The Unlicense"
// "zLib License"

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
