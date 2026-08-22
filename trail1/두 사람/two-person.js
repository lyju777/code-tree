const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A1 = Number(input[0]) 
let A2 = input[1]

let B1 = Number(input[2])
let B2 = input[3]

if((A1 >= 19 && A2 === `M`) || (B1 >= 19 && B2 === `M`)){
    console.log(1)
} else {
    console.log(0)
}