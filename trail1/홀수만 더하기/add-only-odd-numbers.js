const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let sum = 0

for(let i = 1; i <= N; i++){
    if(Number(input[i])%2 !== 0 && Number(input[i])%3 === 0){
        sum+= Number(input[i])
    }
}
console.log(sum)
