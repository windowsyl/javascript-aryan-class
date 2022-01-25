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

let primes = new Set()

function getPrime(knownPrimes) {
  let x = 1;
  for (let p of knownPrimes) {
    x *= p;
  }
  x += 1;
  
  for (let i = 2; i < x/2; i++) {
    if (x%i == 0) { knownPrimes.add(i)}
  }
}
console.log(getPrime(primes))
