//ex1
let createCharacter = [
    { nameChar: "mario1", level: 1, health: 200 },
    { nameChar: "luigi1", level: 2, health: 500 },
    { nameChar: "mario2", level: 3, health: 1000 },
    { nameChar: "luigi2", level: 4, health: 300 }
]
let charactersPowerup = createCharacter.map(newChar => {
    // console.log(newChar.nameChar.toUpperCase());
    // console.log(newChar.level*2);
    // console.log(newChar.health*3);
    // }
    return {
        name: newChar.nameChar.toUpperCase(), // Viết hoa tên
        level: newChar.level * 2,         // Level x2
        health: newChar.health * 3        // Health x3
    };
});
console.log("Danh sanh character sau khi duoc nang cap: ", charactersPowerup);

console.log("Possible winners la: ");
let possibleWinners = charactersPowerup.filter(winners => winners.health > 1000);
console.log(possibleWinners);

//ex2
const players = [
    { name: "Bin", score: 1000 },
    { name: "Ball", score: 2100 },
    { name: "Bong", score: 2000 },
    { name: "Bi", score: 2500 }
]

function printLeaderboard(players) {
    players.sort((a, b) => b.score - a.score);
    players.forEach((player, thuHang) => {
        let medal = "";
        if (thuHang === 0) {
            medal = "🥇 ";
        } else if (thuHang === 1) {
            medal = "🥈 ";
        } else if (thuHang === 2) {
            medal = "🥉 ";
        } else {
            medal = `${thuHang + 1}. `;
        }

        console.log(`${medal}${player.name} - ${player.score}`);
    });
}

printLeaderboard(players);