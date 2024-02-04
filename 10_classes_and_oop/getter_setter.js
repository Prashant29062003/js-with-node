class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    get username(){
        return `${this._username}.toLowerCase()`;
    }
    set username(value){
        this._username = value;
    }
    get password(){
        return `${this._password}.toUpperCase()`;
        // return `${this._password}Prashant`;
    }

    set password(value){
        this._password = value;
    }
    
    
}
const Prashant = new User("Prashant","abc")

// console.log(Prashant);
console.log(Prashant.username);
console.log(Prashant.password);