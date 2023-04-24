const tinycolor = require('tinycolor2');
const _ = require('lodash');

function getColors(painter) {
  const originColors = _.mapValues({
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
  
  console.log('Origin colors:');
  let colors = _.mapValues(originColors, (color, name) => {
    const colorStr = color.toHex8String();
    console.log(`  ${name}: "${colorStr}" - ${color.toHslString()}`);
    return colorStr;
  });
  
  colors = Object.assign(colors, {
    transparent: "#00000000",
  
    background: colors.black,
    highlightBackground: originColors.black.clone().lighten(10).toHex8String(),
    hoverBackground: originColors.black.clone().lighten(20).setAlpha(0.2).toHex8String(),
    text: colors.white,
    string: colors.green,
    number: colors.yellow,
    method: colors.red,
    keyword: colors.blue,
    operator: colors.white,
    class: colors.cyan,
    variable: colors.purple,
    secondaryText: colors.brightBlack,
    comment: colors.brightBlack,
    ignoreText: originColors.brightBlack.clone().darken(20).toHex8String(),
    highlight: colors.red,
    themePrimary: colors.red,
  });

  return { originColors, colors };
}

module.exports = getColors;
