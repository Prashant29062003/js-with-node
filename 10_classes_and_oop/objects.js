function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 3;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){       // -------> This constructor function may be converted to a class declaration.
    this.score = score; 
    this.username = username;
}

createUser.prototype.increment = function(){
    this.score++;
}


createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const nimbu = new createUser("nimbu_Pani", 25); 
const Mehnga_nimbu = new createUser("nimbu_Pani_Pro", 250); 
// console.log(nimbu);
// console.log(Mehnga_nimbu);
nimbu.printMe()

/*
    Here's what happens behind the scenes when the "new" keyword is used:
    
    A new object is created: The new keyword intiates the creation of new javascript object.

    A prototype is linked: The newly created object gets linked to prototype property of the constuctor function. This means that it has access of all Properties and methods defined on the constructor prototype.
    
    The constructor is called: The constructor function is called with spesified arguments and this is bound to newly created object. If no explicit return function is specified from the construtor, JavaScript assumes this, the newlly created object, to be the intended return value. 

    The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), The newly created object is returned.
    
*/
