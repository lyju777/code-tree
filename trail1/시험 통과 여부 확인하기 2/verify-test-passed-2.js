const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let N = Number(input[0]);
let passCount = 0;
let idx = 1;

// N명의 학생 처리
for (let i = 0; i < N; i++) {
    let sum = 0;
    
    // 한 학생당 4개의 과목 점수 합산
    for (let j = 0; j < 4; j++) {
        sum += Number(input[idx++]);
    }
    
    // 평균 60점 이상 여부 확인
    if (sum / 4 >= 60) {
        console.log('pass');
        passCount++;
    } else {
        console.log('fail');
    }
}

// 최종 통과한 학생 수 출력
console.log(passCount);