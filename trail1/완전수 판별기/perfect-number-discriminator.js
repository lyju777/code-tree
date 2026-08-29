const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let sum = 0

for(let i = 1; i < N; i++){
    if(N%i === 0){
        sum+=i
    }
}

if(sum === N){
    console.log(`P`)
} else {
    console.log(`N`)
}

