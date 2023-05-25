const Shape = {
  shape: "",
  shapeColor: "transparent",
  text: '<text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-size="3em" font-weight="bold" font-family= "Arial, Helvetica, sans-serif">WLV</text>',
  textColor: "transparent",

  render() {
    return `${this.shape} fill=${this.shapeColor} />`;
  },
};
const Circle = Shape.extend({
  shape: '<circle cx="150" cy="100" r="60" ',
});
const Square = Shape.extend({
  shape: '<rect x="70" y="50" width="150" height="100" ',
});
const Triangle = Shape.extend({
  shape: '<polygon points="150 30 225 160 65 160" ',
});
