const prompt = require("prompt-sync")()

let array = "error"

while (array == "error") {
    try {
        array = JSON.parse(prompt(`Enter an array: `))
    }
    catch (err) {
    }
}

if (array.length < 4) {
    console.log(`The last item in your array is ${array[array.length - 1]}.`)
} else {
    console.log(`The fourth item in your array is ${array[3]}.`)
}