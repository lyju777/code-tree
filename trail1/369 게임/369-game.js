const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let N = Number(input[0]);
let res = '';

for (let i = 1; i <= N; i++) {
    let string_i = String(i);
    let isClap = false; // 3, 6, 9 포함 여부 체크 플래그

    // 1. 3, 6, 9 문자가 포함되어 있는지 확인
    for (let y = 0; y < string_i.length; y++) {
        if (string_i[y] === '3' || string_i[y] === '6' || string_i[y] === '9') {
            isClap = true;
            break;
        }
    }

    // 2. 3의 배수이거나 3, 6, 9가 포함되어 있다면 0 추가 후 다음 숫자로 이동
    if (i % 3 === 0 || isClap) {
        res += '0 ';
        continue;
    }

    // 3. 조건에 해당하지 않으면 자기 자신 숫자 추가
    res += i + ' ';
}

console.log(res);