// Dates

let myDate = new Date(); 
console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

// const myCreatedDate = new Date(2024, 0, 1);
// const myCreatedDate = new Date("2024-01-8");
const myCreatedDate = new Date("01-8-2024");
// const myCreatedDate = new Date(2024, 0, 1, 5, 3, 8, 9);
// console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getMonth());

// console.log(`${newDate.getDate()} Date , ${newDate.getDay()} Day, ${newDate.getMonth()} Month`);

newDate.toLocaleString("default", {
    weekday: "long",

})