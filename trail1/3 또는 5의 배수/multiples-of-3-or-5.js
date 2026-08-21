const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])

if(A%3 === 0){
    console.log('YES')
} else {
    console.log('NO')
}


if(A%5 === 0){
    console.log('YES')
} else {
    console.log('NO')
}