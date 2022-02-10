const prompt = require("prompt-sync")()

let array = "error"

while (array == "error") {
    try {
        array = JSON.parse(prompt(`Enter an array: `))
    }
    catch (err) {
    }
}

console.log(typeof array[0] == "number")