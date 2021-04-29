const { licenses } = require("../data/licenses");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
module.exports.generateMarkdown = generateMarkdown;
