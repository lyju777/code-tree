const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = input[0]

if(N === `S`){
    console.log(`Superior`)
} else if(N === `A`){
     console.log(`Excellent`)
}else if(N === `B`){
     console.log(`Good`)
}else if(N === `C`){
     console.log(`Usually`)
} else if(N === `D`) {
    console.log(`Effort`)
} else {
    console.log(`Failure`)
}