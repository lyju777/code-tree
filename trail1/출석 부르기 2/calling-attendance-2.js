const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let idx = 0

while(true){
let A = Number(input[idx])

if(A === 1){
    console.log(`John`)
} else if(A === 2){
    console.log(`Tom`)
} else if(A === 3){
    console.log(`Paul`)
} else if(A === 4){
    console.log(`Sam`)
} else {
    console.log(`Vacancy`)
    break;
}
idx++
}