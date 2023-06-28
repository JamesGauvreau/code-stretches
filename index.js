// Need to distinguish empty strings from all other strings.
// Need to distinguish 0 from all other numbers.
// False, null, and undefined are falsy.
// If all else follows, true. 

const input = "dog"

 if(input === "") 
    console.log("The empty string is falsy (the only falsy string)")
    else
        if(input === 0)
        console.log("The number 0 is falsy (the only falsy number)")
        else
            if(input === false)
            console.log("The boolean value false is falsy")
            else
                if(input === null)
                console.log("The null value is falsy")
                else
                    if(input === undefined)
                    console.log("undefined is falsy")
                    else
                        console.log("true") 

// Establish two inputs
// Determine sum of two inputs
// Work from most exclusive to most inclusive values (e.g. below -1000 and *then* below 0). 

const inputplus1 = -5
const inputplus2 = 0
const inputsum = inputplus1 + inputplus2

if(inputsum < -1000)
    console.log(`${inputsum} is less than -1000`)
    else
        if(inputsum < 0)
        console.log(`${inputsum} is a negative number`)
        else
            if(inputsum === 0)
            console.log(`${inputsum} is equal to 0`)
            else
                if(inputsum > 100)
                console.log(`${inputsum} is greater than 100`)
                else
                    console.log(`${inputsum} is greater than 0`)

// Establish two inputs
// Establish if/else to compare the values against 5)

const inputcompare1 = 5
const inputcompare2 = 5

if(inputcompare1 && inputcompare2 >= 5)
    console.log("true")
        else
        console.log("false")

// Establish two pairs of inputs (four total)
// Establish comparison variables for each pair (two total)
// Write if/else to print result. 

const param1A = 11
const param1B = "eleven"
const param1both = param1A == param1B

const param2A = "four"
const param2B = "for"
const param2both = param2A == param2B

if(param1both || param2both === true)
    console.log("true")
        else
        console.log("false")
