class Shape {
    constructor(key, color, text, textColor) {
        this.key = key;
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(key, color, text, textColor, x, y, radius) {
        super(key, color, text, textColor);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    render() {
        return `<svg width="300" height="200""xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><${this.key} x="${this.x_coord}" y="${this.y_coord}" width="${this.width}" height="${this.height}" fill="${this.color}" /><text x="100" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    constructor(key, color, text, textColor, x, y, width, height) {
        super(key, color, text, textColor);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

class Triangle extends Shape {
    constructor(key, color, text, textColor, points) {
        super(key, color, text, textColor);
        this.points = points;
    }
    render() {
    return `<svg width="300" height="200""xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><${this.key} points="${this.points}" fill="${this.color}" /><text x="100" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`
}
}

class Square extends Shape {
    constructor(key, color, text, textColor, x, y, width, height) {
        super(key, color, text, textColor);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" /><${this.key} x="${this.x_coord}" y="${this.y_coord}" width="${this.width}" height="${this.height}" fill="${this.color}" /><text x="100" y="100" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}
makeNewShape = (answersData) => {
 let newShape = new Shape(answersData.shape.key, answersData.color, answersData.text, answersData.textColor)
    if (answersData.shape.key === 'circle') {
        newShape = new Circle(answersData.shape.key, answersData.color, answersData.text, answersData.textColor, answersData.shape.data.x, answersData.shape.data.y, answersData.shape.data.r)
    } else if (answersData.shape.key === 'sqre') {
        newShape = new Square(answersData.shape.key, answersData.color, answersData.text, answersData.textColor, answersData.shape.data.x, answersData.shape.data.y, answersData.shape.data.width, answersData.shape.data.height)
    }
    else if (answersData.shape.key === 'trgl') {
        newShape = new Triangle(answersData.shape.key, answersData.color, answersData.text, answersData.textColor, answersData.shape.data.points)
    }
    return newShape.render();
 
}


module.exports = {
    makeNewShape,
    Circle,
    Square,
    Triangle,
}

