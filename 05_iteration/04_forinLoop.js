const myObject = {
    js: "javaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
}

// const arr = [1,2,3,4,5]
// for (const key in arr) {
//     console.log(`Element is ${key}`);
    
// }
const arr = ["o", "jd", 'm','h']
for (const key in arr) {
    console.log(`Element is "${arr[key]}" at place of ${key}`);
    
}

// const arr = [
//         {
//             js: "javaScript",
//             cpp: "C++",
//             rb: "ruby",
//             swift: "swift by apple"
//         },
//         {
//             g1: "game1",
//             g2: "game2"
//         }
// ]
// for (const key in arr) {
//     console.log(`Element is ${key}`);
    
// }