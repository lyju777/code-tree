const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let a = Number(input[0])
let b = Number(input[1])

let res = ''

while(a <= b){
    res+= a + ' '
    if(a % 2 === 0){
        a += 3
    } 
    else if (a % 2 !== 0){
        a *= 2
    }
}
console.log(res)



