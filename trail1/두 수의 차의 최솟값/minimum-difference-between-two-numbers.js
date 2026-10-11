const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let N = input[0];
let min = 100; // 제한 조건상 최댓값인 100보다 큰 값 또는 충분히 큰 값으로 초기화

for (let i = 1; i < N; i++) {
    // 오름차순이므로 바로 다음 원소와의 차이가 인접한 두 수의 차이입니다.
    let diff = input[i + 1] - input[i];
    if (diff < min) {
        min = diff;
    }
}

console.log(min);