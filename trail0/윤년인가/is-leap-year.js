const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let y = Number(input)

if(y % 100 === 0 && y % 400 !== 0){
    console.log('false')
} else if(y % 4 === 0) {
    console.log('true')
} else {
    console.log('false')
}