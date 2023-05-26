const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js");
const validateColor = require("validate-color").default;

const questions = [
  {
    name: "shapeSelection",
    type: "list",
    message: "Please Select the Shape for your Logo",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Please Input the Color of the Shape",
    validate: ValidateColor,
  },
  {
    name: "textInput",
    type: "input",
    message: "Please Input the Text of your Logo",
    validate: ValidateTextLength,
  },
  {
    name: "textColor",
    type: "input",
    message: "Please Input the Color of the Text",
    validate: ValidateColor,
  },
];

function ValidateTextLength(input) {
  if (input.length <= 3) {
    return true;
  } else {
    return false;
  }
}

function ValidateColor(input) {
  let validColor = validateColor(input);
  console.log(validColor);
  return validColor;
}

async function inquirePrompt(questions) {
  const logoInformation = await inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

function init() {
  inquirePrompt(questions);
}
init();
// const testcircle = new shapes.Circle("blue", "BMW", "white");

// testcircle.printShapeData();
