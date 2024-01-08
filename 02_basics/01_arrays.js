// Array

const myArray = [0,1,2,3,4,5];
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArray[0]);


// Array methods

// myArray.push(0)
// myArray.push(7)
// myArray.pop()
// myArray.unshift(9)
myArray.shift()

// console.log(myArray);
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArray = myArray.join();
// console.log(typeof newArray);
// console.log(newArray);

// slice, splice

// console.log("A ", myArray);
// const myn1 = myArray.slice(1,3); //it cut out the range and gives that part but after creating new array and gives, [ 2, 3 ]
// console.log("B ", myArray); // here its value is remains same as original array i.e. [1,2,3,4,5]
// console.log(myn1);
// const myn2 = myArray.splice(1,3); //it cut out the range it provided in parameter and gives [ 2, 3, 4 ] i.e. (start, include last range) and it works/manipulate in actual array i.e. it change the actual array it doesn't create new array 
// console.log("C ", myArray); //here its value is changed and gives [ 1, 5 ] after splicing
// console.log(myn2);