const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let Y = Number(input[0])

if(Y%4 === 0){
    if(Y%100 === 0 && Y%400 !== 0){
    console.log(`false`)
    return
    }
    console.log(`true`)
} else {
    console.log(`false`)
}