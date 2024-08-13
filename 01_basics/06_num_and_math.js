const score = 400

console.log(score)

const num = new Number(100)
console.log(num);

console.log(num.toString().length)
console.log(num.toFixed(2))

const otherNum = 23.64
console.log(otherNum.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString("en-IN"))

// +++++++++++++++++++++++++++++++++ maths +++++++++++++++++++++++++++++++++++++++++++++++
const myNum = -10
console.log(Math)
console.log(Math.abs(myNum))


Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


console.log(Math.random())

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1) + min))