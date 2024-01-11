// const userEmail = false

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }
const userEmail = [] // this empty array is true

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, (BigInt - 0n), "", null, undefined, NaN



// truthy values

// "0", "false", " ", [] <== (empty Array), {} <== (empty Object), funstion(){} <== (empty function)

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {};

// if(Object.keys(emptyObject).length === 0){
//     console.log("Empty Object");

// }
// if(emptyObject){
//     console.log("Empty Object");

// }

// Nullish coalescing OPerator (??) ===> (works on null undefined)
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 20;
// val1 = undefined ?? 20;
// val1 = null ?? 20 ?? 30;
val1 = null ?? undefined ?? 30;

console.log(val1);


// Terniary Operator

// condtion ? true : false

const iceTeaPrice = 100;
iceTeaPrice < 80 ? console.log("less than 80") : console.log("grater than 80")
