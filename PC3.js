data = require('fs').readFileSync('PC3input.txt', 'utf8').split('\n');

console.log(data);
let gamma = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let line of data) {
  for (let i = 0; i < line.length; i++) {
    gamma[i] += Number(line[i]);
  }
}
gamma = gamma.map((e) => 0 + (e > data.length / 2));
epsilon = gamma.map((e) => 0 + (e == 0));
console.log(
  'power: ',
  parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)
);

let primes = [2];
let i = 2;
while (primes.length < 10001) {
  i++;
  let cont = false;
  for (let p of primes) {
    if (i % p == 0) {
      cont = true;
      break;
    }
  }
  if (cont) {
    continue;
  }
  primes.push(i);
}
// console.log(primes[1000])
console.log(primes.pop());
