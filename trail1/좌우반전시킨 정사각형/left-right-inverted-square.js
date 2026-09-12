const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);
let N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    let res = '';
    // j를 N부터 1까지 감소시키며 i * j 값을 추가
    for (let j = N; j >= 1; j--) {
        res += `${i * j} `;
    }
    console.log(res);
}