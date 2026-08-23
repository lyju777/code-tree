const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = 1; i <= N; i++){
    res+=i+' '
}
console.log(res)