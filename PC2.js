const { argv0 } = require('process');

data = require('fs').readFileSync('PC2input.txt', 'utf8').split('\n');

//part 1
let x = 0;
let y = 0;

for (let movement of data) {
  // console.log(movement[movement.length]);
  let dist = Number(movement[movement.length - 1]);
  switch (movement[0]) {
    case 'u':
      y += dist;
      break;
    case 'd':
      y -= dist;
      break;
    case 'f':
      x += dist;
      break;
  }
}

console.log('part 1: ', x, ' ', y);

//part Part2

x = 0
y = 0
let slope = 0

for (let movement of data) {
  // console.log(movement[movement.length]);
  let dist = Number(movement[movement.length - 1]);
  switch (movement[0]) {
    case 'u':
      slope += dist;
      break;
    case 'd':
      slope -= dist;
      break;
    case 'f':
      x += dist;
      y += dist * slope
      break;
  }
}

console.log('part 2: ', x, ' ', y)

