const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])
let C = Number(input[2])
let D = Number(input[3])
let E = Number(input[4])

if(A > B){
    console.log(1)
} else {
    console.log(0)
}

if(A > C){
    console.log(1)
} else {
    console.log(0)
}

if(A > D){
    console.log(1)
} else {
    console.log(0)
}

if(A > E){
    console.log(1)
} else {
    console.log(0)
}