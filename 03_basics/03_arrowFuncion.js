const user = {
    username: "Prashant",
    price: 1000000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
    }
}

// user.welcomeMessage();

// console.log(this);   //this'll give empty object
// function nimbu(){
//     username: "Rahul",
//     // console.log(this);   //this'll give global object inside nodejs
//     // console.log(this.username); //this'l give 'undefined' as 
// }
// nimbu()

// const nimbu = function() {
//     let username = "Prashant";
//     console.log(this.username); 
// }


// ++++++++++++++++++++ => arrow function +++++++++++++

// () => {} i.e. arrow function 

const nimbu = () => {
    let username = "Prashant";
    console.log(this.username); 
}
nimbu();

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// } 


// const addTwo = (num1, num2) => num1 + num2   // this will return implicit value if arrow function has has expression body


// const addTwo = (num1, num2) => ( num1 + num2 )   // this will return implicit value if arrow function has has expression body

const addTwo = (num1, num2) => {
    num1 + num2
}    // this has to return explicit value if arrow function has has block body


// const addTwo = (num1, num2) => ( {username: "Prahant"} )    // this will return implicit value if arrow function has has expression body

// *********************************************
// Arrow functions can have either an expression body or the usual block body. In an expression body, only a single expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.
// ***********************************************

console.log(addTwo(3,4));