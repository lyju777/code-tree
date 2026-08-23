const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let n = Number(input[0])

if(n === 2){
    console.log(28)
} else if(n === 4 || n === 6 || n === 9 || n === 11){
    console.log(30)
} else {
    console.log(31)
}