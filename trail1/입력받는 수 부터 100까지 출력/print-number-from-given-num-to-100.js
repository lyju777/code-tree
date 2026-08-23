const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let n = Number(input[0])

let res = ''

for(let i = n; i <= 100; i++){
    res+=i+' '
}
console.log(res)