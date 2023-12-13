const fs = require("fs");
const path = require("path");
const input = String(fs.readFileSync(path.join(__dirname, "input.txt"))).trim().split("\n");
const result = input.map(processLine).reduce((a, b) => a + b);
console.log(result);
function processLine(line) {
    const pairMat = [[Number.MAX_SAFE_INTEGER, 0], [-1, 0]];
    ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].forEach((word, i) => {
        const indices = [line.indexOf(String(i + 1)), line.lastIndexOf(String(i + 1)), line.indexOf(word), line.lastIndexOf(word)];
        updatePairMat(pairMat[0], indices[0], i + 1);
        updatePairMat(pairMat[1], indices[1], i + 1);
        updatePairMat(pairMat[0], indices[2], i + 1);
        updatePairMat(pairMat[1], indices[3], i + 1);
    });
    return Number(`${pairMat[0][1]}${pairMat[1][1]}`);
}
function updatePairMat(pair, index, value) {
    if (index >= 0 && index < pair[0]) {
        pair[0] = index;
        pair[1] = value;
    }
}

// why am I doing this? 