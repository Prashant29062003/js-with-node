const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => {return num + 19} )

// const newNums = myNumbers.forEach( (num) => {
//     console.log(num);
// } )

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)      
                .filter( (num) => num >= 51)


//***********************************
// we use multiple functions on any object or array 
// ****************************** */

console.log(newNums);

