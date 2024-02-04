let pi = Math.PI;
console.log(pi);
Math.PI = 5;
console.log(pi);

const propertyDescreptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(propertyDescreptor);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailbale: true,

    chaiBani: function(){
        console.log("chai nhi bani");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    // enumerable: false,
    enumerable: true,   //this create it as iterable
    configurable: false

})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
chai.name = "Nimbu Tea" // this not changable
// console.log(chai.name);

for (let [key, value] of Object.entries(chai)) {
    if (typeof value != "function") {
        console.log(`${key}: ${value}`);
        
    }
    // console.log(`${key}: ${value}`);
    
}