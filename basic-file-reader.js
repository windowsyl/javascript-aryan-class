const fs = require('fs')

data = fs.readFileSync('filetoread.txt', 'utf8')
console.log(data)
