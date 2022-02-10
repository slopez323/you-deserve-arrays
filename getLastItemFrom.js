const prompt = require("prompt-sync")()

let array = "error"

while (array == "error") {
    try {
        array = JSON.parse(prompt(`Enter an array: `))
    }
    catch (err) {
    }
}

console.log(`The last item in your array is ${array[array.length - 1]}.`)