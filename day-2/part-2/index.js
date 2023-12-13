const fs = require('fs');
// The value we can't go pass. I guess.
const threshold = {
  'red': 12,
  'blue': 14,
  'green': 13
};
let total = 0;
let secondTotal = 0;
// the stupid file.
const data = fs.readFileSync('input.txt', 'utf8').split('\n');
data.forEach((line, index) => {
  const matches = Array.from(line.matchAll(/(\d+) (red|blue|green)/g), match => [parseInt(match[1]), match[2]]);
  const values = {
    'red': 0,
    'blue': 0,
    'green': 0
  };
  let exceedThreshold = false;
  matches.forEach(([num, color]) => {
    values[color] = Math.max(values[color], num);
    if (num > threshold[color]) {
      exceedThreshold = true;
    }
  });
  if (!exceedThreshold) {
    total += index + 1;
  }
  secondTotal += values['red'] * values['green'] * values['blue'];
});
console.log(`First Solution: ${total}`);
console.log(`Second Solution: ${secondTotal}`);

// i hate this. I'm dead tired, I wanna go home, except i'm home. help.