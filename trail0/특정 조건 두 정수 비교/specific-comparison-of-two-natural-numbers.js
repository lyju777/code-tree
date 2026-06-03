const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let a = Number(input[0])
let b = Number(input[1])

let x 
let y

if(a < b){
    x = 1
} else {
    x = 0
}

if(a === b){
    y = 1
} else {
    y = 0
}

console.log(`${x} ${y}`)
