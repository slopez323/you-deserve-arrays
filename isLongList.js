const prompt = require("prompt-sync")()

let array = "error"

while (array == "error") {
    try {
        array = JSON.parse(prompt(`Enter an array: `))
    }
    catch (err) {
    }
}

console.log(array.length >= 10)

// if (array.length < 10){
//     console.log(`The array length is at least 10: ${false}.`)
// } else {
//     console.log(`The array length is at least 10: ${true}.`)
// }