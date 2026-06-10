const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let n = input[0]
let x = input[1].split(' ').map(Number)
let res = []

for(let i = 0; i < n; i++){
    if(x[i] % 2 === 0){
        res.push(x[i])
    }
}
console.log(...res.reverse())