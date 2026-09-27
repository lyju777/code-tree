const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let res = ''
let arr = []

for(let i of input){
    if(i === '0'){
        break;
    }
    arr.push(i)
}

for(let i of arr.reverse()){
    res += i + ' '
}
console.log(res)