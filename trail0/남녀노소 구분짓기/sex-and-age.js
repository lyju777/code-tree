const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let sex = Number(input[0]) // 남자: 0 여자: 1 
let age = Number(input[1]) // 19세 이상은 성인

if(age >= 19){
    if(sex === 1){
        console.log('WOMAN')
    } else if(sex === 0){
        console.log('MAN')
    }
} else {
    if(sex === 1){
        console.log('GIRL')
    } else if(sex === 0){
        console.log('BOY')
    }
}