const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let i = 1
let res = ''

while(i <= N){
    res += i+' '
    i++
}

console.log(res)