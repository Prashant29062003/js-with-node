//  Imediately Invoked Function Expression [IIFE]

// function nimbu(){
//     console.log("DB connected");
// }
// nimbu();

// [IIFE]
(function nimbu(){
    //named IIFE
    console.log("DB connected");
})(); //this semicolon is used as to stop this function 


((name) => {
    console.log(`DB2 connected at ${name}`);
})("Mongo DB"); 



// WE use this IIFE to avoid the problem of global scope pollution
// One of the primary uses for an IIFE is to create private scope (i.e., private state).
// Variables in JavaScript are traditionally scoped to a function.
// Knowing this, we can leverage the behavior of closures to protect variables or methods from being accessed!
