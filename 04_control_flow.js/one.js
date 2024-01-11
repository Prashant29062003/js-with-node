// if

// const isUserLoggedIn = true
// if (isUserLoggedIn){

// }

// <, >, <=, >=, ==, ===, !=, !==

// score = 200;

// if (score>100) {
//     let power = "fly";
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}