const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A1 = Number(input[0])
let A2 = Number(input[1])
let B1= Number(input[2])
let B2 = Number(input[3])

if(A1 > B1 && A2 > B2){
    console.log(1)
} else {
    console.log(0)
}
