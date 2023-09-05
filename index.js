import { argv } from 'node:process';
import colorNames from '1500-color-names';
import uniqolor from 'uniqolor';

const hexColor = '#xx00xx';

const colorLibrary = [colorNames];
console.log(colorNames['Blue']);

//const hueInput = argv[2];

//const hue = colorLibrary.Object.keys(colorNames);
//console.log(hue);

const randomColor = uniqolor.random().color;
const outputColor = randomColor;

if (argv.length < 3) {
  console.log(randomColor);
} else if (argv[2]) {
}

const patternLong = '#'.repeat(32);
const patternShort = '#'.repeat(5);
const spacesLine = ' '.repeat(20);
const spacesSpace = ' '.repeat(8);
const spaceColorSpace = `${patternShort} ${spacesSpace} ${randomColor} ${spacesSpace} ${patternShort}`;

console.log(patternLong + '\n' + patternLong + '\n' + patternLong);
console.log(patternShort + spacesLine + patternShort);
console.log(
  patternShort + spacesSpace + randomColor + spacesSpace + patternShort,
);
console.log(patternShort + spacesLine + patternShort);
console.log(patternLong + '\n' + patternLong + '\n' + patternLong);
