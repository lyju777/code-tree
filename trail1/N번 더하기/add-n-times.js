const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let N = Number(input[1])

for(let i = 0; i < N; i++){
    A+=N
    console.log(A)
}