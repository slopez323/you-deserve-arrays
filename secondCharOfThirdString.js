const prompt = require("prompt-sync")()

let array = "error"

while (array == "error") {
    try {
        array = JSON.parse(prompt(`Enter an array of at least three strings: `))
    }
    catch (err) {
    }
}

let thirdItem

if (typeof array[2] == "string"){
    thirdItem = array[2]
    console.log(`The second character in the third item of the array is: ${thirdItem[1]}.`)
} else {
    console.log("error")
}