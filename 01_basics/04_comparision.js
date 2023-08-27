// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log(null > 0); // => false (1)  
// console.log(null == 0); // => false (2)
// console.log(null >= 0); // => true (3)

/*

------ The reason is that an equality check == and comaparisions > < >= <= work differentlly.
------ Comparisions convert null to a number treating it as 0.
------ That's why 
------ (3) null >= 0 is true 
------        and 
------ (1) null > 0 is false.

*/

console.log(undefined > 0); // => false (1)  
console.log(undefined == 0); // => false (2)
console.log(undefined >= 0); // => false (3)

/*
-----> Undefined always gives false on comparision or in equality check.
*/

// === {strict check}

console.log("2" === 2); // => false