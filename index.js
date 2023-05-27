const inquirer = require("inquirer");
const shapes = require("./lib/shapes.js");
const validateColor = require("validate-color").default;
const renderSVG = require("./render.js");
const fs = require("fs");
const { Console } = require("console");

//questions for inquirer to gather information from the user
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
    name: "text",
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

//function to validate the length of the text input to make sure it isn't more than 3 characters
function ValidateTextLength(input) {
  if (input.length <= 3) {
    return true;
  } else {
    console.log("Please input 3 or less characters for text");
    return false;
  }
}

//function to validate if a color is valid or not, this is utilizing a validate color package from npm
function ValidateColor(input) {
  let validColor = validateColor(input);
  return validColor;
}

//async function that takes in the questions and returns answers.
async function inquirePrompt(questions) {
  const logoInformation = await inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    buildCircle(answers);
  });
}

//function to build the appropriate shape and then send said object over to the render function
function buildCircle(answers) {
  let logoShape;
  let writeReturn;
  switch (answers.shapeSelection) {
    case "Circle":
      logoShape = new shapes.Circle(
        answers.shapeColor,
        answers.text,
        answers.textColor
      );
      writeReturn = renderSVG(logoShape);
      break;
    case "Square":
      logoShape = new shapes.Square(
        answers.shapeColor,
        answers.text,
        answers.textColor
      );
      writeReturn = renderSVG(logoShape);
      break;
    case "Triangle":
      logoShape = new shapes.Triangle(
        answers.shapeColor,
        answers.text,
        answers.textColor
      );
      writeReturn = renderSVG(logoShape);
      break;
  }
  writeFile(writeReturn);
}

//write file function that takes the input from the render function and writes the logo.svg file
function writeFile(value) {
  fs.writeFile("logo.svg", value, function (err) {
    if (err) {
      throw err;
    }
    console.log("svg Rendered");
  });
}

//initialize function
function init() {
  inquirePrompt(questions);
}

//call for the initialize function
init();
