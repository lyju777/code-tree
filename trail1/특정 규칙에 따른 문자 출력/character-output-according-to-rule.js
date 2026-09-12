const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''


for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j < (N - i) - 1; j++){
        res += '  '
    }
    for(let j = 0; j < i + 1; j++){
        res += '@ '
    }
    console.log(res)
}

for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j < (N - i) - 1; j++){
        res += '@ '
    }
    for(let j = 0; j < i + 1; j++){
        res += '  '
    }
    console.log(res)
}

