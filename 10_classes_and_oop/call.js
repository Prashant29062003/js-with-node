function SetName(username){
    // complex calculation
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    SetName.call(this, username);

    this.email = email;
    this.password = password;
}
const meraName = new createUser("Prashant", "pdjd123@ex.com", 123);
console.log(meraName);