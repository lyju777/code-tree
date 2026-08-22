const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let M = Number(input[0])

if(M === 3 || M === 4 || M === 5){
    console.log(`Spring`)
} else if(M === 6 || M === 7 || M === 8){
    console.log(`Summer`)
} else if(M === 9 || M === 10 || M === 11){
    console.log(`Fall`)
} else {
    console.log(`Winter`)
}