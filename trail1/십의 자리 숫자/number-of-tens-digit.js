const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let cnt = 0
let arr = Array(9).fill(0)

while(true){
    if(Number(input[cnt]) === 0){
        break;
    }
    
    if(Number(input[cnt]) >= 10){
        arr[parseInt(Number(input[cnt])/10)-1]++
    }
    cnt++
}

// console.log(arr)
for(let i = 0; i < arr.length; i++){
    console.log(`${i+1} - ${arr[i]}`)
}