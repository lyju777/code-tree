const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let a = Number(input[0])

if(a < 10 || a > 20){
    console.log('yes')
} else {
    console.log(`no`)
}