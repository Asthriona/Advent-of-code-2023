const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
console.log(input)
const lines = input.trim().split("\n");
const parsedData = lines
  .filter(line => line.trim() !== "")
  .map(line => line.split(":"))
  .map(entry => {
    const gameNumber = Number(entry[0].split("Game ")[1]);
    const rounds = entry[1]
      .split(";")
      .map(round => round.trim().split(",")
        .map(roll => roll.trim().split(" "))
        .reduce((acc, rollInfo) => {
          const [value, color] = rollInfo.map(item => item.trim());
          acc[color] = Number(value);
          return acc;
        }, {})
      );
    return { gn: gameNumber, tn: rounds };
  })
  .filter(row => row.tn.every(round => Object.keys(round).every(color => round[color] <= { red: 12, green: 13, blue: 14 }[color])))
  .reduce((accumulator, row) => accumulator + row.gn, 0);
console.log(parsedData);
