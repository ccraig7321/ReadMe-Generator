// Variable 
const inquirer = require("inquirer");
const fs = require('fs');

// * The generated README includes the following sections: 

//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions

// * The generated README includes 1 badge that's specific to the repository.

// User prompting for info
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title?"
  },
  {
    type: "input",
    name: "description",
    message: "Enter description"
  },
  {
    type: "input",
    name: "installation",
    message: "How to install"
  },
  {
    type: "input",
    name: "usage",
    message: "How to use"
  },
  {
    type: "input",
    name: "license",
    message: "Include a license? (optional)"
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed?"
  },
  {
    type: "input",
    name: "test",
    message: "Include tests? (optional)"
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
])
// User information that is entered 
  .then(function(userAnswers){
    console.log(userAnswers);

    var filename = (userAnswers.title + "log.md");

    var readMe = generateReadMe(userAnswers)

    fs.writeFile(filename, readMe, function(err){
        if (err){
            return console.log(err);
        }
        console.log("Success! File was written to log.md")
    })
})

function generateReadMe(userAnswers){
    let readMe = `* [${userAnswers.license}](#foo)

    [![License](https://img.shields.io/badge/apm-l-:packageName)]

    # Title: 
    ${userAnswers.title}
    
    ## Description: 
    ${userAnswers.description}

    ## Table of Contents
    * [Usage](#usage)

    [GitHub](http://github.com)



























    ## Usage
    ${userAnswers.usage}

    ## License
    ${userAnswers.license}

    ## Contributing
    ${userAnswers.contributing}

    ## Tests
    ${userAnswers.tests}

    ## Questions
    [${userAnswers.userName}](http://github.com/${userAnswers.userName})


    ${userAnswers.email}
    
    
    
    
    
    
    
    
    
    # <a id="usage">Foo</a>

    `
    return readMe
}

