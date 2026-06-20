const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let index = 0

while(true){

    let a = Number(input[index])

    index++

    if(a < 25){
        console.log('Higher')
    }
    if(a > 25){
        console.log('Lower')
    }
    if(a === 25){
        console.log('Good')
        break;
    }
}

