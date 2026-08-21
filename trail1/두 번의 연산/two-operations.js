const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])

if(A%2 !== 0){
    A+=3
}

if(A%3 === 0){
    A/=3
}
console.log(A)