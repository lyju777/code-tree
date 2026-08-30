const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])

let res = ''

for(let i = 1; i <= A; i++){
    if((i%2 === 0 && i%4 !== 0) || parseInt(i/8)%2 === 0 || (i%7) < 4){
        continue;
    }
    res+=i+' '
}
console.log(res)

