const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');


async function userInput () {
    const usersChoice = await inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to draw?',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like your shape to be?'
        },
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like your shape to have?'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be?'
        },
       
    ]);

    let selectedShape;
    switch (usersChoice.shape) {
        case 'Circle':
            selectedShape = new Circle();
            break;
        case 'Triangle':
            selectedShape = new Triangle();
            break;
        case 'Square':
            selectedShape = new Square();
            break;
    }

    selectedShape.setColor(usersChoice.color);
    selectedShape.setText(usersChoice.text);
    selectedShape.setTextColor(usersChoice.textColor);

    const svg = selectedShape.render();

    fs.writeFile('output.svg', svg, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

userInput();