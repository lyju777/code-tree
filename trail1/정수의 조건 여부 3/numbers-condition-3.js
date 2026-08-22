const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])

if(A%13 === 0 || A%19 === 0){
    console.log(`True`)
} else {
    console.log(`False`)
}