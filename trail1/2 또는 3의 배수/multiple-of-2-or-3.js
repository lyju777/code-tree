const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = 1; i <= N; i++){
    if(i%2 === 0 || i%3 === 0){
        res += 1+' '
    } else {
        res += 0+' '
    }
}
console.log(res)