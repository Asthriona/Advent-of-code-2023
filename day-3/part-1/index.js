// Not working, I give up.
const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8").trim().split("\n");
const numberPositions = input.reduce((positions, line, lineNumber) => {
    const numberMatches = [...line.matchAll(/[0-9]+/g)].map(match => ({ lineNumber, text: match[0], position: match.index }));
    return [...positions, ...numberMatches];
}, []);
const symbolPositions = input.reduce((positions, line, lineNumber) => {
    const symbolMatches = [...line.matchAll(/[^0-9,\.]/g)].map(match => ({ lineNumber, text: match[0], position: match.index }));
    return [...positions, ...symbolMatches];
}, []);
const result = numberPositions.reduce((sum, { lineNumber: nLine, position: nPos, text: numberText }) => {
    const foundSymbol = symbolPositions.find(({ lineNumber: sLine, position: sPos }) =>
        (sLine === nLine || sLine === nLine - 1 || sLine === nLine + 1) && (sPos <= nPos + numberText.length && sPos >= nPos - 1)
    );

    return foundSymbol ? sum + (+numberText) : sum;
}, 0);
console.log(result);
