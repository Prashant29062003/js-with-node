// Scope 

// let a = 20;
// const b = 30;
// var c = 40;

var c = 800;

if(true){
    let a = 20; 
    const b = 30; 
    // var c = 40;
    c = 40;
    console.log(a);
    console.log(b);
}

// console.log(a);  // ReferenceError: a is not defined 
// console.log(b);     //ReferenceError: b is not defined
// console.log(c);     // it'll give 40 but global it is 800 yet it gives 40 because at var acts in global only and it not recomended for profesional coding (Actually var declared at window at browser so its variable name remains same globaly)


function one(){
    const username ="Prashant";

    function two(){
        const website = "github";
        console.log(username);
    } 
    // console.log(website);// ReferenceError: website is not defined (as "website" is not in this scope) 

    two();
}

one();

// ++++++++++++++++++++++++++++++++++++++++ interting ++++++++++++++++++++++++++++++++++++++++

console.log(addOne(8));     //But this can be accesable as function is just defne
function addOne(num){
    return num +1
}

// console.log(addTwo(8)); // ReferenceError: Cannot access 'addTwo' before initialization, here function is stored in variable i.e. 'addTwo'
const addTwo = function(num){ // expression (this type declaration of function is called expression) i.e. a function is stored in a variable
    return num + 2
}

// addTwo(8);


