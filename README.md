# README Generator

A high quality README is important for any application but writing up a good README takes your time aways from working on the application. Use this command line README Generator to quickly create your README for any application. Including:
- what your app is for, 
- how to use your app, 
- how to install your app, 
- how to report issues, 
- how to make contributions (if your project is open source)



## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Requirements
  - [x] Use the Inquirer package.

  - [ ] Sections for README Generator:
    - [ ] Title
    - [ ] Description
    - [ ] Table of Contents
      - [ ] items clicked link to the corresponding section of README
    - [ ] Installation
    - [ ] Usage
    - [ ] License
      - [ ] list of options
      - [ ] badge added near top
    - [ ] Contributing
    - [ ] Tests
    - [ ] Questions
      - [ ] GitHub username links to individuals Github
      - [ ] Email address provides instructions on how to reach me with questions

  - [ ] Application will be invoked by using the node ```bash node index.js ``` command
  - [ ] A sample README generated using the application must be submitted.
  - [ ] A walkthrough video that demonstrates: 
    - [ ] the functionality of the README generator must be submitted, and a link to the video should be included in your README file
    - [ ] how a user would invoke the application from the command line
    - [ ] how a user would enter responses to all of the prompts in the application
    - [ ] a generated README that matches the user input and has a functioning table of contents

## Guidelines:
 Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

 Make sure that your repo includes a package.json with the required dependencies.
 Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.
 
 Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

