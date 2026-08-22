const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

if((N%2 !== 0 && N%3 === 0) || (N%2 === 0 && N%5 === 0)){
    console.log(`true`)
} else {
    console.log(`false`)
}