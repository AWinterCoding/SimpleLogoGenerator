function render(logoInformation) {
  return ` <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  ${logoInformation.shape} fill = "${logoInformation.shapeColor}" />
  <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-size="3em" font-weight="bold" font-family= "Arial, Helvetica, sans-serif" fill="${logoInformation.textColor}"> ${logoInformation.text} </text>"
  </svg>`;
}

module.exports = render;
