class Shape {
  constructor(shapeColor, text, textColor) {
    this.shape = '<circle cx="150" cy="100" r="60" ';
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
  printShapeData() {
    console.log(
      `Qualities of this shape: Shape: ${this.shape} ShapeColor: ${this.shapeColor} Text: ${this.text} TextColor: ${this.textColor}`
    );
  }
}
class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    this.shape = '<circle cx="150" cy="100" r="60" ';
  }
}
class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    this.shape = '<rect x="70" y="50" width="150" height="100" ';
  }
}
class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    this.shape = '<polygon points="150 30 225 160 65 160" ';
  }
}

module.exports = { Circle, Square, Triangle };
