const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let a = input[0]
let b = input[1]

const a_len = a.length
const b_len = b.length

if(a_len > b_len){
    console.log(`${a} ${a_len}`)
} else if(a_len < b_len){
      console.log(`${b} ${b_len}`)
} else {
     console.log(`same`)
}