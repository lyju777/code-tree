const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let i = 3
let res = ''

while(i <= N){
    res += i+' '
    i+=3
}
console.log(res)