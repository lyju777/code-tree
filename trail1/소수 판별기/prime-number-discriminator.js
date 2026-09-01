const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let bool = false

for(let i = 2; i < N; i++){
    if(N%i === 0){
       bool = true
       break;
    }
}
if(bool === true){
    console.log(`C`)
} else {
    console.log(`P`)
}