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
    message: "What are the instructions for installation?"
  },
  {
    type: "input",
    name: "usage",
    message: "What is the application's usage?"
  },
  {
    type: "confirm",
    message: "Would you like to include a license?",
    name: "license",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who is contributing to this project?"
  },
  {
    type: "confirm",
    name: "test",
    message: "Include tests?"
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
    let readMe = `*
     # [${userAnswers.title}](#foo)

    ___

    [${userAnswers.license}]
    [![License](https://img.shields.io/badge/apm-l-:packageName)]

    ___
    
    ## Description: 
    ${userAnswers.description}

    ___

    ## Table of Contents
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Test](#test)
    * [Questions](#questions)


    ___

    ## Usage
    ${userAnswers.usage}

    ___

    ## License
    ${userAnswers.license}
    Copyright 2020 CHELSEY CRAIG

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



    ___

    ## Contributing
    ${userAnswers.contributing}

    ___

    ## Tests
    ${userAnswers.test}

    ___

    ## Questions


    ### GitHub: [${userAnswers.userName}](http://github.com/${userAnswers.userName})


    ### Email: Please contact me with any questions. ${userAnswers.email} 

    ___
    
    
    
    
    
    
    
    # <a id="usage"></a>
    

    `
    return readMe
}


    // [GitHub](http://github.com)

    // let readMe = `* [${userAnswers.license}](#foo)

