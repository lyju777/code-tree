const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let res = ''

for(let i = A; i >= B; i-=2){
    res+= i+' '
}
console.log(res)