const User ={
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    get password(){
        return `${this._password}.toUpperCase()`;
        // return `${this._password}Prashant`;
    }

    set password(value){
        this._password = value;
    }
    
    
}
const chai = new User("Prashant","abc")
// username: "Prashant",
// password: "abc",