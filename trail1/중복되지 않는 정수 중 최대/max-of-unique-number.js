const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let N = input[0];
let max = -1; // 조건을 만족하는 숫자가 없을 때 기본값인 -1로 설정

// 1부터 N까지 각 숫자를 확인
for (let i = 1; i <= N; i++) {
    let isDuplicate = false; // 현재 숫자가 중복되는지 체크하는 변수

    for (let j = 1; j <= N; j++) {
        // 자기 자신이 아닌데, 값이 같은 경우가 있다면 중복!
        if (i !== j && input[i] === input[j]) {
            isDuplicate = true;
            break; // 중복이 확인되었으므로 더 비교할 필요가 없음
        }
    }

    // 중복되지 않은 숫자라면 최댓값 비교
    if (!isDuplicate) {
        if (input[i] > max) {
            max = input[i];
        }
    }
}

console.log(max);