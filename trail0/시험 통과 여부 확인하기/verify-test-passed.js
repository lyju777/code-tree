const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let a = input

if(a >= 80){
    console.log('pass')
} else{
    let res = 80 - a
    console.log(`${res} more score`)
}
