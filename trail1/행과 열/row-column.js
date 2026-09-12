const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let res = ''

for(let i = 1; i <= A; i++){
    res = ''
    for(let j = 1; j <= B; j++){
        res += `${i*j} `
    }
    console.log(res)
}