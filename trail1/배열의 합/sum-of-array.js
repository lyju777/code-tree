const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let N = 4

for(let i = 0; i < N; i++){
    let sum = 0
    let arr = input[i].split(' ').map(Number)
    for(let j = 0; j < N; j++){
        sum += arr[j]
    }
    console.log(sum)
}
