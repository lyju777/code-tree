const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let sum = 0
let arr = Array(10).fill(0)
let orgA = 0

while(true){
    orgA = 0
    if(A <= 1){
        break;
    }
    orgA = A
    A = parseInt(orgA/B)
    arr[parseInt(orgA%B)]++
}

const res = arr.map(x => x**2)

for(let i = 0; i < res.length; i++){
    sum += res[i]
}

console.log(sum)