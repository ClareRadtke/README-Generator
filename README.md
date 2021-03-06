# README Generator

A high quality README is important for any application but writing up a good README takes your time away from working on the application. Use this command line README Generator to quickly create your README for any application. Including:
- what your app is for, 
- how to use your app, 
- how to install, 
- how to report issues, 
- how to make contributions (if your project is open source),
- licensing

Please see [README-sample.md](/README-sample.md) for an example of a README created using this generator.

![Video walkthrough of how to use the Generator](/resources/images/generateREADME.gif)

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

  - [x] Sections for README Generator:
    - [x] Title
    - [x] Description
    - [x] Table of Contents
      - [x] items clicked link to the corresponding section of README
    - [x] Installation
    - [x] Usage
    - [x] License
      - [x] list of options
      - [x] badge added near top
    - [x] Contributing
    - [x] Tests
    - [x] Questions
      - [x] GitHub username links to individuals Github
      - [x] Email address provides instructions on how to reach me with questions

  - [x] Application will be invoked by using the node ```bash node src/index.js ``` command
  - [x] A sample README generated using the application must be submitted.
  - [x] A walkthrough video that demonstrates: 
    - [x] the functionality of the README generator must be submitted, and a link to the video should be included in your README file
    - [x] how a user would invoke the application from the command line
    - [x] how a user would enter responses to all of the prompts in the application
    - [x] a generated README that matches the user input and has a functioning table of contents
