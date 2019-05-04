let num = 103.941

console.log(num.toFixed(2))

console.log(Match.round(num))
console.log(Match.floor(num))
console.log(Match.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random()) * (max - min + 1) + min

// Challenge area
// 1-5 true if correct - false if not correct

let makeGuess = funcrion(){
    let min = 0
    let max = 1
    let randomNum = Math.floor(Math.random()) * (max - min + 1) + min

    return guess === randomNum
}
console.log(makeGuess)
