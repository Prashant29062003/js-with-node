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


// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => ( num1 + num2 )


const addTwo = (num1, num2) => ( {username: "Prahant"} )


console.log(addTwo(3,4));