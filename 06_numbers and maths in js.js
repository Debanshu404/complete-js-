//**************************************** */ number and maths in js ***************************

const balance = Number(69);
// console.log(balance)
// let newbalance= balance.toString();  it will convert number into string .
// console.log(newbalance);
// console.log(typeof(newbalance))
// console.log(balance.toFixed(5))  specifies the number of decimal places.

const somenumber = 1651651.6516511511511

// let newsomenumber= somenumber.toPrecision(6); it will  attempts to format the number with a fixed number of significant digits, which can lead to scientific notation when the number is very large or small,hence we will use to fixed preferely

let newsomenumber = somenumber.toFixed(6);
// console.log(newsomenumber)
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); it will calculate in indian standard currency reader.

////////////////////////MATHS//////////////////////////////

//    console.log(Math)
// console.log(Math.abs(-4.651651))  is used to find the absolute (non-negative) value of a number. When you call Math.abs(-4), you're asking for the absolute value of -4, which is 

// console.log(Math.round(4.6));  output:5 as it will round of according to normal rules;
// console.log(Math.ceil(4.6)); output:5 as it will round of to the next integer doesnt matter if it it neg or pos;
// console.log(Math.floor(4.9)); output:4 becuase it works converse of ceil;
// console.log(Math.min(4, 3, 6, 8)); finds the minimum value amongst the given set of value;
// console.log(Math.max(4, 3, 6, 8)); same as min but finds the max value;


// console.log(Math.random()); returns a randiom float number ranges between 1 and 0 greater than 0 less than 1
// console.log((Math.random()*10) + 1); the random number will now ranges form 1 to 11

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// generates a random integer between min (inclusive) and max (inclusive) using the Math.random() function along with Math.floor(). Here's how it works:

// (max - min + 1) calculates the range of possible values. In your example, it's 20 - 10 + 1, which is 11. This means there are 11 possible values in the range from min to max.

// Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

// Math.random() * (max - min + 1) scales this random number to fit within the range of values you want. In this case, it will produce a random number between 0 (inclusive) and 11 (exclusive).

// Math.floor() is then used to round down this random number to the nearest integer, ensuring that you get a whole number within the specified range.

// Finally, you add min to the result to shift the range to start from min and end at max.

// So, the output of the code will be a random integer between 10 and 20 (inclusive of both 10 and 20).
