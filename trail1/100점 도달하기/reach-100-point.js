const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = N; i <= 100; i++){
    if(i >= 90){
       res +='A'+' '
    } else if (i >= 80){
       res +='B'+' '
    } else if (i >= 70){
       res +='C'+' '
    } else if (i >= 60){
       res +='D'+' '
    } else {
       res +='F'+' '
    }
}
console.log(res)

