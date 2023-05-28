//This is the parent shape class that all shapes inherit
class Shape {
  constructor(shapeColor, text, textColor) {
    this.shape = '<circle cx="150" cy="100" r="60" ';
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  //this class is the render class, rather than having this render be in every single shape, I opted for the shapes to be interchangable at the start of this, to keep the formatting uniform, hence this.shape is the first tag formatting
  render() {
    return ` <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  ${this.shape} fill = "${this.shapeColor}" />
  <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-size="3em" font-weight="bold" font-family= "Arial, Helvetica, sans-serif" fill="${this.textColor}"> ${this.text} </text>"
  </svg>`;
  }
}

//Circle class
class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    this.shape = `<circle cx="150" cy="100" r="60" `;
  }
}

//Square class
class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    this.shape = '<rect x="70" y="50" width="150" height="100" ';
  }
}

//Triangle Class
class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    this.shape = '<polygon points="150 30 225 160 65 160" ';
  }
}

module.exports = { Circle, Square, Triangle };
