// --------- ? How to create my own mehtod like here "WE WANT TO FIND TRUE LENGTH OF ANY ARBITRERY "STRING."
// let myName = "Prashant    "
// let myClass = "BetchECE        "

// console.log(myName.trueLength());

let myHeros = ["ironman", "spiderman", "thor"]
let heroPower = {
    ironman: "techIntelegence",
    spiderman: "swing",
    thor: "electricity",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Prashant = function(){
    console.log("This is present at all object.");
}

Array.prototype.Rahul = function(){
    console.log("Hay Rahul What's up bro?");
}
// heroPower.Prashant();
// myHeros.Prashant()

// myHeros.Rahul();    // this will run as "myHero" is an Array and we already declared Rahul as function in Array's protototype .

// Object.Rahul()
// heroPower.Rahul()

// ------------------   inheritance   --------------------

const User = {
    username: "Ved",
    email: "ved@example.com"
}
const Teacher = {
    makeVideo: true
}
const TechingSupport = {
    isAvailbale: false
}
const TaSupport ={
    makeAssignment: "Js assignment",
    fullTime: true,
    __proto__: TechingSupport
}

Teacher.__proto__ = User;

// modern Syntax
Object.setPrototypeOf(TechingSupport, Teacher);


let anotherUsername = "MeraCode        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.trueLength();
"prashant Kumar    ".trueLength()
"mera naam chun chun chun ... raat chndni main aur tum".trueLength()
