const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let arr = Array(9).fill(0)

for(let i = 1; i <= N; i++){
    arr[input[i]-1]++
}

for(let i of arr){
    console.log(i)
}
