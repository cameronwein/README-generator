const badge = license => {
  if (license !== 'None') {
    return `https://img.shields.io/badge/license-${license}-brightgreen`
  }
  else {
  return ``
  }
};

const licenseText = license => {
  if (license !== 'None') {
    return `## License

  This project is licensed using a ${license} license`
  }
  else {
  return ``
  }
};



// function to generate markdown for README
const generateMarkdown = data => {

  return `# ${data.title}
  ${badge(data.license)}
  ## Description

  ${data.description}


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ${licenseText(data.license)}


  ## Contributing

  ${data.contributing}


  ## Tests

  ${data.test}


  ## Questions

  For any questions please reach out to ${data.email} or visit my [Github](https//:github.com/${data.github}) page 




`;
}

module.exports = generateMarkdown;
