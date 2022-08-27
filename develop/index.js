// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// const {message} = require('statuses');
// inquirer for readme
const htmlwork= ({
        title,
        description,
        contents,
        installation,
        usage,
        license,
        contribution,
        tests,
        questions,
        git,
        email,
        //Description, Table of Contents, Installation, Usage, License, Contributi

}) => `# ${title}
*[Description](#description)
*[Contents](#contents)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributing](#contributing)
*[Tests](#tests)
*[Questions](#questions)
*[Contact](#git)
*[Contact](#email)
#Description
${description}
##Contents
${contents}
###Installation
${installation}
####Usage
${usage}
####License
${license}
#####Constribution
${contribution}
######Tests
${tests}
#######Questions
${questions}

#Contact
*GitHub: ${git}
*E-mail: ${email}`


inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
           // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            type: 'input',
            message: 'What is the description of your app?',
            name: 'description',
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            type: 'input',
            message: 'What goes on you table of contents?',
            name: 'contents',
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'installation',
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            type: 'input',
            message: 'What usage does the app have?',
            name: 'usage',
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            //license's
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            type: 'input',
            message: 'What contributions are there?',
            name: 'contribution',
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            type: 'input',
            message: 'What tests have you ran on your app?',
            name: 'tests',
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            type: 'input',
            message: 'Any questions?',
            name: 'questions',
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            type: 'input',
            message: 'What is your GitHub name?',
            name: 'git',
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
        {
            type: 'input',
            message: 'What is your E-mail?',
            name: 'email',
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
        },
    ])
 
    .then((answers) => {

        fs.writeFile('README.md', htmlwork(answers), (err) =>
        err ? console.log(err) : console.log('Successfully created your READEME!')
        );
    })