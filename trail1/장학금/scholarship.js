const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0]) // 중간고사
let B = Number(input[1]) // 기말고사

if(A >= 90){
    if(B >= 95){
        console.log(100000)
    } else if(B >= 90){
        console.log(50000)
    } else {
        console.log(0)
    }
} else {
    console.log(0)
}

