const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let sumX = 0 // 짝수
let sumY = 0 // 홀수

for(let i = 0; i < input.length; i++){
    if(i%2 !== 0){
        sumX += Number(input[i])
    } else {
        sumY += Number(input[i])
    }    
}

if(sumX < sumY){
    console.log(sumY - sumX)
} else {
     console.log(sumX - sumY)
}