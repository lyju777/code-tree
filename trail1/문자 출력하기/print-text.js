const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let a = input[0]
let res = ''

for(let i = 0; i < 8; i++){
    res += a
}
console.log(res)