// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";

// 1부터 n까지 소수를 구합니다.
for (let i = 1; i <= n; i++) {
    if (i === 1) continue;
    let isprime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) isprime = false;
    }

    if (isprime) str += i + " ";
}

console.log(str);