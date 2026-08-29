const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let a = Number(input[1])

let i = 1

while(i <= N){
    if(i%a === 0){
        console.log(1)
    } else {
        console.log(0)
    }
    i++
}