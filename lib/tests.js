const { Circle, Triangle, Square } = require('./shapes.js');

describe('Circle', () => {
    it('should render a circle', () => {
        const circle = new Circle();
        circle.setColor('red');
        circle.setText('hello');
        circle.setTextColor('blue');
        circle.setRadius(100);
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="red" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue">
            hello
        </text>
    </svg>`;

        expect(circle.render()).toEqual(expectedSVG);
    });
});

describe('Triangle', () => {
    it('should render a triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        triangle.setText('hello');
        triangle.setTextColor('blue');
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,50 100,150 200,150" fill="red" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue">
            hello
        </text>
    </svg>`;
        expect(triangle.render()).toEqual(expectedSVG);
    });
});

describe('Square', () => {
    it('should render a square', () => {
        const square = new Square();
        square.setColor('red');
        square.setText('hello');
        square.setTextColor('blue');
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="red" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue">
            hello
        </text>
    </svg>`;
        expect(square.render()).toEqual(expectedSVG);
    });
});