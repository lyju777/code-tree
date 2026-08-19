const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let n = Number(input[0])

if(n < 0){
    console.log(`ice`)
} else if(n >= 100){
    console.log(`vapor`)
} else {
    console.log(`water`)
}