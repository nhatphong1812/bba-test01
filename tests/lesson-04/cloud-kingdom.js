let playerName = "Mario";
let currentLives = 3;
const level1Coins = 25;
const level2Coins = 30;
const level3Coins = 45;

let tongSoCoin = level1Coins + level2Coins + level3Coins;
console.log("Tong so coin cua 3 levels la: " + tongSoCoin);

let tinhTrungBinh = tongSoCoin / 3;
console.log("Gia tri trung binh: " + tinhTrungBinh);

let soCoinDu = tongSoCoin % 3;
console.log("So coin du: " + soCoinDu);