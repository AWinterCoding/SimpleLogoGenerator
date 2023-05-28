const shape = require("../shapes");

describe("ShapeTests", () => {
  //Circle Tests
  test("Circle Returning Correct Shape", () => {
    const testShape = new shape.Circle("blue", "AWE", "pink");
    let result = testShape.shape == '<circle cx="150" cy="100" r="60" ';

    expect(result).toEqual(true);
  });

  test("Circle Returning Correct Color", () => {
    const testShape = new shape.Circle("red", "LIE", "white");
    let result = testShape.shapeColor == "red";

    expect(result).toEqual(true);
  });

  test("Circle Returning Correct Text", () => {
    const testShape = new shape.Circle("red", "LIE", "white");
    let result = testShape.text == "LIE";

    expect(result).toEqual(true);
  });

  test("Circle Returning Correct Text Color", () => {
    const testShape = new shape.Circle("red", "LIE", "white");
    let result = testShape.textColor == "white";

    expect(result).toEqual(true);
  });

  //Square Tests

  test("Square Returning Correct Shape", () => {
    const testShape = new shape.Square("blue", "AWE", "pink");
    let result =
      testShape.shape == '<rect x="70" y="50" width="150" height="100" ';

    expect(result).toEqual(true);
  });

  test("Square Returning Correct Color", () => {
    const testShape = new shape.Square("red", "LIE", "white");
    let result = testShape.shapeColor == "red";

    expect(result).toEqual(true);
  });

  test("Square Returning Correct Text", () => {
    const testShape = new shape.Square("red", "LIE", "white");
    let result = testShape.text == "LIE";

    expect(result).toEqual(true);
  });

  test("Square Returning Correct Text Color", () => {
    const testShape = new shape.Square("red", "LIE", "white");
    let result = testShape.textColor == "white";

    expect(result).toEqual(true);
  });

  //Triangle Tests

  test("Triangle Returning Correct Shape", () => {
    const testShape = new shape.Triangle("blue", "AWE", "pink");
    let result = testShape.shape == '<polygon points="150 30 225 160 65 160" ';

    expect(result).toEqual(true);
  });

  test("Triangle Returning Correct Color", () => {
    const testShape = new shape.Triangle("red", "LIE", "white");
    let result = testShape.shapeColor == "red";

    expect(result).toEqual(true);
  });

  test("Triangle Returning Correct Text", () => {
    const testShape = new shape.Triangle("red", "LIE", "white");
    let result = testShape.text == "LIE";

    expect(result).toEqual(true);
  });

  test("Triangle Returning Correct Text Color", () => {
    const testShape = new shape.Triangle("red", "LIE", "white");
    let result = testShape.textColor == "white";

    expect(result).toEqual(true);
  });
});
