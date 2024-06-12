// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!!"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(`Each charcter is ${greet}`);
}

// Maps ----> it works on unique values

const myMap = new Map()
myMap.set('IN', "Indiia");
myMap.set('USA', "United States of Ameria");
myMap.set('UK', "United Kingdom");
// myMap.set('UK', "United Kingdom"); // ----> this will not print in console as map prints ony unique key value pair

// console.log(myMap);

// for (const key in myMap) {       // -----> for in Loop is not iterble for map() method 
//     console.log(key);
// }

for (const [key, value] of myMap) {
    // console.log(key +" :- "+ value);
    // console.log(`${key} :- ${value}`);
}


const myObject = {
    game1: "NFS Most Wanted",
    game2: "god of war"
}
// for (const [key, value] of myObject) {      // TypeError: myObject is not iterable via "forof LOOP"
//     console.log(`${key} :- ${value}`);
    
// }