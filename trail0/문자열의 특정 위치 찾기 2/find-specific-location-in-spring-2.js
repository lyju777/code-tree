const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let a = input

const apple = "apple"
const banana = "banana"
const grape = "grape"
const blueberry = "blueberry"
const orange = "orange"

let arr = [apple,banana,grape,blueberry,orange]
let sum = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i][2] === a || arr[i][3] === a){
        sum++
        console.log(arr[i])
    }
}
  console.log(sum)