const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let n = input.map(Number)

let arr = []

for(let i = 0; i < n.length; i++){
    arr.push(n[i])
}

for(let i = 0; i < 8; i++){
  let sum = arr[i] + arr[i+1]
   if(sum >= 10){
       arr.push(Math.floor(sum%10))  
   } else {
       arr.push(sum)
   }
}

let res = ''

for(let i = 0; i < arr.length; i++ ){
    res += arr[i] + ' '
}
console.log(res)