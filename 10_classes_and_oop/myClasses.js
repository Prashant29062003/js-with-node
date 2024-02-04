// ES6

// class User {
//     constructor(user,email,password){
//         this.user=user;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     createUser(){
//         return `${this.user.toLowerCase()}`
//     }
// }
// const Prashant = new User("Prashant","Prashant@29.ai",123);
// console.log(Prashant.encryptPassword());
// console.log(Prashant.createUser());

// Behind the scene

function User(username,email,password){
    this.user=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
const meraNaam = new User("Prashant","Prashant@29.ai",123);
console.log(meraNaam.encryptPassword());
console.log(meraNaam.createUser());