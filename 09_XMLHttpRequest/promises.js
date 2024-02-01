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