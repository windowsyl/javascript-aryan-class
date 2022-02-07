let data = require('fs').readFileSync('PC4input.txt', 'utf8').split('\n');
let index = data.indexOf('');
let points = data
  .slice(0, index)
  .map((el) => el.split(',').map((el) => Number(el)));
let commands = data.slice(index + 1, -1);

for (let c of commands) {
  let axis = c[11] == 'x' ? 1 : 0;
  let fold = Number(c.slice(13));
  for (let p of points) {
    if (p[axis] > fold) {
      console.log(p[axis], fold, 2 * fold - p[axis]);
      p[axis] = 2 * fold - p[axis];
    }
  }
  points = [...new Set(points)];
}

console.log(points);
