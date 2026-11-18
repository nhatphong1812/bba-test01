let findPairsDivisibleBy17 = 0;

for (let i = 1; i <= 100; i++) {
    for (let j = i; j <= 100; j++) {
        if ((i + j) % 17 === 0) {
            findPairsDivisibleBy17++;
            console.log(`(${i}, ${j})`);
        }
    }
}
console.log("Tong so cap la: " + findPairsDivisibleBy17);