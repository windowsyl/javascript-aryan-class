function readInput() {
  const fs = require('fs')
  return fs.readFileSync('PC1input.txt', 'utf8').split('\n')
}

function findIncreases(data) {
  return data.map((el, i) => el - data[i-1]).filter(i => i > 0)
}

let data = readInput()
console.log(data)

let increases = findIncreases(data)

console.log('there were ' + increases.length + ' increases')
console.log("the largest of which was " + Math.max(...increases))
