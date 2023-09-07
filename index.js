const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const questions = require('./lib/questions');
const shapes = require('./lib/shapes');


const generateFile = (svgFile) => {
    let filePath = path.resolve(`${__dirname}/new_logo_file`, 'logo.svg')
    fs.writeFile(filePath, svgFile, err => {
        if (err) throw err;
        console.log('Generated logo.svg')
    })
}

const runInq = () => {
    inquirer.prompt(
        questions.array 
    )
    .then((answers) => {
        generateFile(
            shapes.generateNewShape(answers)
        ); 

    })
    .catch((error) => {
        if (error.isTtyError) {
          console.log('Can\'t be rendered');
        } else {
          console.log('Something went wrong');
        }
      })
}

let init = () => {
    runInq();
}

init ();