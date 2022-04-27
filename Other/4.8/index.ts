import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CSVFileReader("football.csv")
reader.read()

const dateFirstMatch = reader.data[0][0]
console.log(dateFirstMatch)

let manUnitedWins = 0

for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++
    }
}

console.log(manUnitedWins)
