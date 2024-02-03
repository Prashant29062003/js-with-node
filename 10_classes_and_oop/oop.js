const user = {
    username: "Prashant",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function(){
        console.log("Got user detail.");
        // console.log(this.username); // "this" refers to the current context or specfies here "username"
        // console.log(this); // output: whole user object 
    }
}

// console.log(user.username);

// console.log(this);      // -----------> output: this will give {} :- empty object in nodeJS like runtime-Environment BUT in Browser- "this" will give the "window" object which is already present in browser

// console.log(user.getUserDetail());

function User(useranme, loginCount, isLoggedIn){
    this.username = useranme;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this     //---------> this is optional as this is implicit function so we had not write this "return this" BUT for verbose(using or containing more words than are needed)

    return this
}

const userOne = new User("Prashant", 23, "true");
const userTwo = new User("Rahul", 29, "false");
console.log(userOne.constructor);   // constructor- The initial value of Object.prototype.constructor is the standard built-in Object constructor.
// console.log(userTwo);