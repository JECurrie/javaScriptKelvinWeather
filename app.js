//The forecast today is 293 Kelvin. 
const kelvin = 0;
//The only difference is that Celsius is 273 degrees less than Kelvin. 
const celsius = kelvin - 273;
//Use this equation to calculate Fahrenheit
//When you convert from Celsius to Fahrenheit, you often get a decimal number. 
//Use the .floor() method from the Math library to round down the Fahrenheit temperature. 
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);