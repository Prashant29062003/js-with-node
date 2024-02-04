class User{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);

        this.email = email;
        this.password = password;
    }
    addChannel(){
        console.log(`yo check out my channel - DailyGeeksInfo and follow ${this.username}`);
    }
}
const chai = new Teacher("Prashant","pro@level.ke",123);

chai.addChannel()