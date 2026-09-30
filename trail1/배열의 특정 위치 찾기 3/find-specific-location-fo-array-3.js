const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let cnt = 0

for(let i = 0; i < input.length; i++){
    if(Number(input[i]) === 0){
        cnt = i
        break;
    }
}
console.log(`${Number(input[cnt-1]) + Number(input[cnt-2]) + Number(input[cnt-3])}`)