const prompt = require("prompt-sync")()

let array = JSON.parse(prompt(`Enter an array: `))

console.log(`The first item in your array is ${array[array.length - 1]}.`)