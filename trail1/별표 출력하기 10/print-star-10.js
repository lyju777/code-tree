const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

for (let i = 1; i <= N * 2; i++) {
    let res = ''
    let count = 0

    if (i % 2 !== 0) {
        // i가 홀수일 때: 1, 2, 3... 순으로 증가
        count = 1 + (i - 1) / 2
    } else {
        // i가 짝수일 때: N, N-1, N-2... 순으로 감소
        count = N - (i / 2 - 1)
    }

    // 안쪽 for문으로 별 생성
    for (let j = 0; j < count; j++) {
        res += '* '
    }

    console.log(res)
}