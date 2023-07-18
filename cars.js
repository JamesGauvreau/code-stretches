const cars = ["Honda", "Toyota", "Ford", "Subaru"]

console.log(cars)

cars.pop()
cars.pop()
cars.push("Mercedes", "Ford", "Audi")
cars.shift()
cars.unshift("Hyundai")

console.log(cars)

donkey = "There once was a donkey named Eeyore."
let counter = 0

console.log(cars[2])

for(let i = 0; i < donkey.length; i++) {
    if (donkey[i] === "o") {
        counter++
    }
}

console.log(counter)