const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])
let C = Number(input[2])

if(B > A && B < C){
    console.log(1)
} else {
    console.log(0)
}