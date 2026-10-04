const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let arr = 0

for(let i = 0; i < input.length; i++){
    if(Number(input[i])%3 === 0){
        break;
    }
    arr++
}

console.log(Number(input[arr-1]))