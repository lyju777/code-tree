const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

console.log(N*N)
if(N < 5){
    console.log('tiny')
}