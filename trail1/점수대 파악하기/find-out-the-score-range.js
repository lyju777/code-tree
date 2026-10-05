const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let arr = Array(10).fill(0)
let cnt = 0
let grade = 100

while(true){
    if(Number(input[cnt]) === 0){
        break;
    }

    if(Number(input[cnt]) >= 10){
        arr[parseInt(Number(input[cnt])/10)-1]++
    }
    cnt++
}

arr.reverse()

for(let i = 0; i < arr.length; i++){
    console.log(`${grade} - ${arr[i]}`)
    grade-=10
}