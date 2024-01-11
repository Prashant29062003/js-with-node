// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        // console.log("7 is best");
    }else {
        // console.log(element);
    }
}

// console.log(element)

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop vlaue: ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop value ${i}`);
        // console.log(i +" X "+ j +" = "+ (i*j) );
    }
    
}

let myArray = ["falsh", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index ==7) {
//         console.log("7 is best...");
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

for (let i = 1; i <= 10; i++) {
        if (i == 7) {
            console.log("7 is best...");
            continue
        }
    console.log(`value of i is ${i}`);
    
}