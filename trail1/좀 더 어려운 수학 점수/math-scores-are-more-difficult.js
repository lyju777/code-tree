const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A1 = Number(input[0]) // 수학
let A2 = Number(input[1]) // 영어

let B1 = Number(input[2]) // 수학
let B2= Number(input[3]) // 영어

if(A1 > B1){
    console.log(`A`)
} else if(A1 < B1) {
    console.log(`B`)
}

if(A1 === B1){
    if(A2 > B2){
    console.log(`A`)
} else if(A2 < B2) {
    console.log(`B`)
}
}


