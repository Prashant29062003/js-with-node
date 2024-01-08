// Singleton
// const gitHub = new Object(); // Singleton Object
// object.create // => constructor method


//object literals


const mySym = Symbol("key1");

const JsUser = {
    Username : "Prashant",
    "full name": "Prashant Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Ambala",
    email: "prashant234@google.com",
    isLoggedinDays: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.Username);
// console.log(JsUser["Username"]);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

// JsUser.email = "prashant@chatgpt.com";
// console.log(JsUser);
// Object.freeze(JsUser); // After this "freeze" method JsUser cant't be manipulated 

// JsUser.email = "prashant@microsoft.com"; //therefore this email can't be the part of JsUser
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.Username}`);
}


console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

