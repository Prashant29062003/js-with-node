function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email",{
        get: function(){
            return `${this._email}.toUpperCase()`
        },
        set: function(value){
            this._email = value;
        }
    })

    Object.defineProperty(User, "password",{
        get: function(){
            return this._password.toLowerCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

const chai = new User("chai@123.ai", "sad123");
console.log(chai.email);