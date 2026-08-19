const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let n = Number(input[0])

const book = 3000
const mask = 1000

if(n >= book){
    console.log(`book`)
} else if(n >= mask){
    console.log(`mask`)
} else {
    console.log(`no`)
}
