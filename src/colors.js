const tinycolor = require('tinycolor2');
const _ = require('lodash');

function getColors(painter) {
  let originColors = _.mapValues({
    black: tinycolor("#282433"),
    brightBlack: tinycolor("#938AAD"),
    red: tinycolor("#e965a5"),
    green: tinycolor("#b1f2a7"),
    yellow: tinycolor("#ebde76"),
    blue: tinycolor("#b1baf4"),
    purple: tinycolor("#e192ef"),
    cyan: tinycolor("#b3f4f3"),
    orange: tinycolor("#ea7e6c"), // for git conflict status and some error status
    white: tinycolor("#eee9fc"),
  }, painter);

  originColors = Object.assign(originColors, {
    background: originColors.black,
    highlightBackground: originColors.black.clone().lighten(10),
    hoverBackground: originColors.black.clone().lighten(20).setAlpha(0.2),
    text: originColors.white,
    reverseText: originColors.black,
    string: originColors.green,
    number: originColors.yellow,
    method: originColors.red,
    keyword: originColors.blue,
    operator: originColors.white,
    class: originColors.cyan,
    variable: originColors.purple,
    secondaryText: originColors.brightBlack,
    comment: originColors.brightBlack,
    ignoreText: originColors.brightBlack.clone().darken(20),
    highlight: originColors.red,
    themePrimary: originColors.red,
  });
  
  console.log('Origin colors:');
  let colors = _.mapValues(originColors, (color, name) => {
    const colorStr = color.toHex8String();
    console.log(`  ${name}: "${colorStr}" - ${color.toHslString()}`);
    return colorStr;
  });
  
  colors = Object.assign(colors, {
    transparent: "#00000000",
  });

  return { originColors, colors };
}

function getLightColors(painter) {
  let originColors = _.mapValues({
    black: tinycolor("#282433"),
    brightBlack: tinycolor("#756F8C"),
    red: tinycolor("#C24481"),
    green: tinycolor("#3C8032"),
    yellow: tinycolor("#A86200"),
    blue: tinycolor("#6370BF"),
    purple: tinycolor("#9A2FAD"),
    cyan: tinycolor("#2D8096"),
    orange: tinycolor("#C44949"), 
    white: tinycolor("#FBFAFC"),
  }, painter);

  originColors = Object.assign(originColors, {
    background: originColors.white,
    highlightBackground: originColors.white.clone().darken(10),
    hoverBackground: originColors.white.clone().darken(20).setAlpha(0.2),
    text: originColors.black,
    reverseText: originColors.white,
    string: originColors.green,
    number: originColors.yellow,
    method: originColors.red,
    keyword: originColors.blue,
    operator: originColors.black,
    class: originColors.cyan,
    variable: originColors.purple,
    secondaryText: originColors.brightBlack,
    comment: originColors.brightBlack,
    ignoreText: originColors.brightBlack.clone().lighten(20),
    highlight: originColors.red,
    themePrimary: originColors.red,
  });
  
  console.log('Origin colors:');
  let colors = _.mapValues(originColors, (color, name) => {
    const colorStr = color.toHex8String();
    console.log(`  ${name}: "${colorStr}" - ${color.toHslString()}`);
    return colorStr;
  });
  
  colors = Object.assign(colors, {
    transparent: "#00000000",
  });

  return { originColors, colors };
}

module.exports = {getColors, getLightColors};
