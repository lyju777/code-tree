const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let res1
let res2

if(A < B){
    res1 = 1
} else {
    res1 = 0
}

if(A === B){
    res2 = 1
} else {
     res2 = 0
}

console.log(`${res1} ${res2}`)