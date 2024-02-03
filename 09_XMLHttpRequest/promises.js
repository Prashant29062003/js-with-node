// new Promise() using variable
const promiseMe = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async is complete.");
        resolve();
    }, 1000)
})

promiseMe.then(function(){
    console.log("Async resolved.");
})

// new Promise() using without variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 completed");
        resolve();
    },1000)
}).then(function(){
    console.log("ohh Yeah ho gya complete.");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 3 completed");
        resolve();
    }, 1000)
})

// Promise resolve is comes from promiseThree is comes here in then as it's parameter and execute here and goes to next then function and at last in catch.
promiseThree.then(function(){
    console.log("promise resolve.");
}).then(function(){
    console.log("here, previous 'then' is comes as parameter");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("4th Promise.");
        resolve({userName: "Prashant Kumar",email: "mera@emale.com", password: 123});
    }, 1000)

}).then(function(user){
    console.log(user);
})
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: "Prashant Kumar", password: 123});
        }else{
            reject("ERROR: Somethng went wrong.");
        }
    }, 1000)
})
promisefour.then((user) => {
    console.log(user.userName);
}).then((userName) => {
    console.log(userName);
}).catch(function(error){
    console.log(error);
})
// final either resolve or reject it will run, it is more like default like this will definately work at finally.
.finally(() => console.log("Final comment, either resolve and reject."))

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName: "Rahul Kumar",email: "meri@female.com", password: 12903})
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000)
})

async function consumPromiseFive(){
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumPromiseFive();


// ---------------------> using "async" keyword and "try and catch" format

// async function getAllUser(){
//     try {
//         const response = await fetch("https://randomuser.me/api/");
//         // console.log(response);
//         // this data is also required time to convert from string to JSON format so we have to use "await" keyword here for data conversion.
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// } 
// getAllUser();

//-------------------->  Using then and catch method 

fetch("https://api.github.com/users/Prashant29062003")
.then((response) => {
    return response.json()
})
.then(function(data){
    console.log(data);
    document.querySelector("#avatar").src = avatar_url;
})
.catch((error) => console.log(error))