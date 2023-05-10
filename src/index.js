const fs = require('fs').promises;
const { getColors, getLightColors } = require('./colors');
const getTheme = require('./theme');

// dark themes
console.log('Generating theme: normal');
const normalTheme = getTheme('Hard Hacker', getColors((color, name) => {
  return color;
}));

fs.writeFile('./themes/normal.json', JSON.stringify(normalTheme, null, 2)).catch(() => process.exit(1));

console.log('Generating theme: darker');
const darkerTheme = getTheme('Hard Hacker Darker', getColors((color, name) => {
  switch (name) {
    case 'black':
    case 'brightBlack':
      color.darken(3);
      break;
    default:
      break;
  }
  return color;
}));

fs.writeFile('./themes/darker.json', JSON.stringify(darkerTheme, null, 2)).catch(() => process.exit(1));

console.log('Generating theme: high contrast');
const highContrastColors = getColors((color, name) => {
  return color;
});
highContrastColors.colors.highContrastBackground = highContrastColors.originColors.background.clone().darken(3).toHexString();
const highContrastTheme = getTheme('Hard Hacker High Contrast', highContrastColors, { highContrast: true });

fs.writeFile('./themes/high-contrast.json', JSON.stringify(highContrastTheme, null, 2)).catch(() => process.exit(1));

// light themes
console.log('Generating theme: light');
const lightTheme = getTheme('Hard Hacker Light', getLightColors((color, name) => {
  return color;
}));

fs.writeFile('./themes/light.json', JSON.stringify(lightTheme, null, 2)).catch(() => process.exit(1));

console.log('Generating theme: light hight contrast');
const lightHighContrastColors = getLightColors((color, name) => {
  return color;
});
lightHighContrastColors.colors.highContrastBackground = lightHighContrastColors.originColors.background.clone().darken(3).toHexString();
const lightHighContrastTheme = getTheme('Hard Hacker Light High Contrast', lightHighContrastColors, { highContrast: true });
fs.writeFile('./themes/light-high-contrast.json', JSON.stringify(lightHighContrastTheme, null, 2)).catch(() => process.exit(1));
