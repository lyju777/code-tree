const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

if(N >= 80){
    console.log(`pass`)
} else {
    console.log(`${80-N} more score`)
}