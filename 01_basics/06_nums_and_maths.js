const score = 200;
// console.log(score); 

const balance = new Number(100);
// console.log(balance); 

// console.log(balance.toString().length); 
// console.log(balance.toFixed(2)); 

const otherNumber = 123.78909;

// console.log(otherNumber.toPrecision(3))

const hundreds = 10000000;

// console.log(hundreds.toLocaleString()); //US Standards
// console.log(hundreds.toLocaleString('en-IN')); //Indian Standards


// +++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4)); // it converts any number in "positive" number i.e. absolute

// console.log(Math.round(4.6));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.6)); //it gives upper value, here i.e. 5
// console.log(Math.ceil(4.2)); //it gives upper value, here i.e. 5
// console.log(Math.floor(4.6)); //it gives lower value, here i.e. 5

// console.log(Math.min(3,5,2,1,7));
// console.log(Math.max(3,5,2,1,7));

// console.log(Math.random());
// console.log(Math.floor((Math.random()*10) + 1));

let min = 10;
let max = 20;

console.log((Math.floor(Math.random()*(max - min) + 1)) + min);



