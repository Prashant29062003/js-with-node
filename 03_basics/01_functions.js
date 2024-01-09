

function sayMyName(){
    console.log("P")
    console.log("r")
    console.log("a")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("n")
    console.log("t")
}

// sayMyName(); // function call
// sayMyName; //referencing

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1,num2){
    // let result = num1+num2;
    // return result;
    return num1+num2;
}

const result = addTwoNumbers(3,5);
// console.log("result =", result);

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter your username");
    //     return
    // }
    if(!username){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Prashant"));
// console.log(loginUserMessage(""));

// function calculateCartPrice(num1,num2,...num3){ //"..."i.e. rest
//     return num3
// }

// console.log(calculateCartPrice(200,300,9000,790));   //it'll give [9000,790] i.e. ...num3

function calculateCartPrice(num1,num2,...num3){ // "..." i.e. rest
    return num2,num3
}

// console.log(calculateCartPrice(200,300,9000,790)); // it'll also give [9000,790] as function return last value


const user = {
    username: "Prashant",
    price: 499
}

function objectHandleing(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}

// objectHandleing(user);

const NewArray = [200,300,400,500];

function returnThirdValue(getThirdValue){
    return getThirdValue[2];
}

// console.log(returnThirdValue(NewArray));
// console.log(returnThirdValue([200,300,400,500]));