const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

if(N >= 3000){
    console.log(`book`)
} else if(N >= 1000){
    console.log(`mask`)
} else if(N >= 500){
    console.log(`pen`)
} else {
    console.log(`no`)
}