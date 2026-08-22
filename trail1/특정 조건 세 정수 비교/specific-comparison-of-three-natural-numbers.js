const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])

let res1
let res2

if(a <= b && a <= c){
    res1 = 1
} else {
    res1 = 0
}

if(a === b && a === c && b === c){
   res2 = 1
} else {
   res2 = 0
}

console.log(`${res1} ${res2}`)