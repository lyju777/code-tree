const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let res = ''

while(A >= B){
    res += A + ' '
    A -=2
}
console.log(res)