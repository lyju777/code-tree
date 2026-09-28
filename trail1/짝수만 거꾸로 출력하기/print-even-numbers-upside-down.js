const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let arr = []
let res = ''

for(let i = 1; i <= N; i++){
    if(Number(input[i])%2 === 0){
        arr.push(Number(input[i]))
    }
}

for(let i of arr.reverse()){
    res += i + ' '
}

console.log(res)