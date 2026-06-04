const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let a = Number(input[0])
let b = Number(input[1])

let res = ''

for(let i = a; a <= b; i++){
  res += b + ' '
  b = b - 1
}
console.log(res)