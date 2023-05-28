const shape = require("../shapes");

describe("Circle Returning Correct Values", () => {
  it("it should return true values from the render function", () => {
    const validate = new Validate();
    const result = validate.isPassword("PASSWORD123");

    expect(result).toEqual(false);
  });
});
