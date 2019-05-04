// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Lovcal scope (fahrenheit, celsius)

let convertFahrenheitToCelsius = function(fahrenheit){
    let celcius = (fahrenheit - 32) * 5 / 9

    if(celcius <= 0){
        let isFreezing = true
    }
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)