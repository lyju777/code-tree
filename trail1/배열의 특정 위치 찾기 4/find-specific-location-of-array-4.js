const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let cnt = 0
let sum = 0

for(let i of input){
    if(i === '0') break;
    
    if(Number(i)%2 === 0){
        sum+=Number(i)
        cnt++
    }
}
console.log(`${cnt} ${sum}`)