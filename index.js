const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// array of questions for user
const prompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('Please enter a title for your project!');
                return false;
              }
            }
          },
        {
            type: 'input',
            name: 'description',
            message: 'Type a description of your project',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter a description of your project!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Type installation instructions for your project',
            validate: installationInput => {
              if (installationInput) {
                return true;
              } else {
                console.log('Please enter your installation instructions!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Type usage information for your project',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('Please enter your usage information!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Type contribution guidelines for your project',
            validate: contributingInput => {
              if (contributingInput) {
                return true;
              } else {
                console.log('Please enter your contribution guidelines!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'test',
            message: 'Type test instructions for your project',
            validate: testInput => {
              if (testInput) {
                return true;
              } else {
                console.log('Please enter your test instructions!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your github user name',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your github username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
              }
            }
          },
          {
            type: 'list',
            name: 'license',
            message: 'Select your license',
            choices:  ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
          },
    ])
}

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
         if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

// function to initialize program
prompt()
.then(answers => {
    return generateMarkdown(answers);
})
.then(generatedPage => {
    writeFile(generatedPage)
})
.catch(err => {
    console.log(err);
  });
