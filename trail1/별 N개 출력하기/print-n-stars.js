const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let i = 0

while(i < N){
    console.log(`*`)
    i++
}