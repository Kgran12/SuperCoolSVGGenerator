const Shapes = require('./shapes');

describe('circle', () => {
    describe('constructor', () => {
        it('should create a new circle', () => {
            let circle = new Shapes.Circle();
            expect(circle).toBeInstanceOf(Shapes.Circle);
        });
    });

    describe('render', () => {
        it('should render a circle', () => {
            let circle = new Shapes.Circle(key='circle', color='red', text='ABC', textColor='blue', x='50', y='50', radius='40');

            expect(circle.render()).toBe('<svg width="300" height="200""xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><circle cx="50" cy="50" r="40" fill="red" /><text x="100" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="blue">ABC</text></svg>');
        })
    })
})

describe ('square', () => {
    describe('constructor', () => {
        it('should create a new square', () => {
            let square = new Shapes.Square();
            expect(square).toBeInstanceOf(Shapes.Square);
        });
    });

    describe('render', () => {
        it('should render a square', () => {
            let square = new Shapes.Square(key='sqre', color='red', text='ABC', textColor='blue', x='50', y='50', width='40', height='40');

            expect(square.render()).toBe('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><rect x="50" y="50" width="40" height="40" fill="red" /><text x="100" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="blue">ABC</text></svg>');
        })
    })
})

describe ('triangle', () => {
    describe('constructor', () => {
        it('should create a new triangle', () => {
            let triangle = new Shapes.Triangle();
            expect(triangle).toBeInstanceOf(Shapes.Triangle);
        });
    });

    describe('render', () => {
        it('should render a triangle', () => {
            let triangle = new Shapes.Triangle(key='trgl', color='red', text='ABC', textColor='blue', points='50,50 50,100 100,100');

            expect(triangle.render()).toBe('<svg width="300" height="200""xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><polygon points="50,50 50,100 100,100" fill="red" /><text x="100" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="blue">ABC</text></svg>');
        })
    })
})

