const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let bool = false

for(let i = A; i <= B; i++){
    if(1920%i === 0 && 2880%i === 0){
        bool = true
    }
}
if(bool === true){
    console.log(1)
} else {
    console.log(0)
}