const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let a = Number(input[0])

if(a % 2 === 0){
   a = parseInt(a/2)
}

if(a % 2 !== 0){
  a = parseInt((a+1)/2)
}

console.log(a)