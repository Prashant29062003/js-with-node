class User{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
    static createdId(){
        return 123;
    }
}
const Prashant = new User("Prashant");
console.log(Prashant.createdId());