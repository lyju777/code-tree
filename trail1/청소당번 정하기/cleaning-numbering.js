const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let n = Number(input[0])

let cnt1 = 0 //교실청소 2일
let cnt2 = 0 // 복도청소  3일
let cnt3 = 0 // 화장실 청소 12일

for(let i = 1 ; i <= n; i++){
    // if(i === 0){
    //     continue;
    // }

    if(i%12 === 0){
        cnt3++
    }

    else if(i%3 === 0){
        cnt2++
    }

   else if(i%2 === 0){
        cnt1++
    }

}
console.log(`${cnt1} ${cnt2} ${cnt3}`)