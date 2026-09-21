const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let idx = 1
let sum = 0

for(let i = 0; i < N; i++){
    sum = 0
    let a = Number(input[idx++])
    let b = Number(input[idx++])

    for(let j = a; j <= b; j++){
        if(j%2 === 0){
            sum+=j
        }
    }
    console.log(sum)
}