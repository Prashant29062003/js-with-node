function SetName(username){
    // complex calculation
    console.log("called");
    this.username = username;
}

function createUser(username, email, password){
    // SetName(username);
    SetName.call(this, username);

    this.email = email;
    this.password = password;
}
const meraName = new createUser("Prashant", "pdjd123@ex.com", 123);
console.log(meraName);