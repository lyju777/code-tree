const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

if(N < 0){
    console.log(N)
    console.log('minus')
} else {
    console.log(N)
}