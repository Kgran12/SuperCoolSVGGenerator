const colorValidate = require('validate-color');

array = [
    {
        type: 'input',
        name: 'text',
        message: 'what text would you like to display in the image? Note, this cannot be more than 3 characters',
        validate: (val) => {
            if (val.length > 3) {
                return 'Please enter a value less than 3 characters'
            } else {
            return true;
        }
    }
    },
    {
        type: 'input',
        name: 'color',
        message: 'what color would you like the shape to be? Please enter a hex value',
        validate: (val) => {
            if (colorValidate(val) === false) {
                return 'Please enter a valid hex value'
            } else {
            return true;
        }
    }
    },
    {
        type: 'input',
        message: 'What color do you want the text to be? Please enter a hex value',
        name: 'textColor',
        validate: (val) => {
            if (colorValidate(val) === false) {
                return 'Please enter a valid hex value'
            } else {
            return true;
        }
    }
    },
    {
        type: 'list',
        message: 'What shape would you like to use?',
        name: 'shape',
        choices: [
            {
                name: 'Circle',
                value:
                {
                    name: 'circle',
                    key: 'circle',
                    data: 'x=50 y=50 r=40'
                }
            },
            {
                name: 'Square',
                value:
                {
                    name: 'square',
                    key: 'sqre',
                    data: 'x=50 y=50 width=40 height=40'
            }
            },
            {
                name: 'Triangle',
                value:
                {
                    name: 'triangle',
                    key: 'trgl',
                    data: 'points=50,50 50,100 100,100'

                
            }
        }
        ]


    }
]

module.exports = 
{
    "array": array,
}