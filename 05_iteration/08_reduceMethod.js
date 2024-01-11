const myNums = [1,2,3]
const initialvalue = 0
// const myTotal = myNums.reduce(
//     (accumulator, currentValue) => {
//         console.log(`acc: ${accumulator} and current: ${currentValue}`);
//         return accumulator + currentValue
//     },
//     initialvalue
// )

// *************
//  SAME
// *************

const myTotal = myNums.reduce((acc,curr) => acc+curr,0) 
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 )
console.log(totalPrice);