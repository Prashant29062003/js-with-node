// Singleton

// const tinderUser = new Object(); // Singleton Object
const tinnderUSer = {} //literal Object

tinnderUSer.id = "123absd";
tinnderUSer.name = "Rahul"
tinnderUSer.isLoggedIn = false;

console.log(tinnderUSer);

const regularUser = {
    eamil: "random213@gamil.com",
    fullname: {
        userName: {
            firstName: "Prashant",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser["fullname"]["userName"]["firstName"]);
// console.log(regularUser.fullname.userName.firstName);


// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "a", 4: "b"};
// const obj4 = {5: "a", 6: "b"};

// // const obj = {...obj1, ...obj2}; // Using "spread operator" 90% of time we use this method
// // const obj = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Object({target}, {sources}) and here "obj3 = {}"

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
]
users[1].email;

// console.log(tinnderUSer);

// console.log(Object.keys(tinnderUSer));
// console.log(Object.values(tinnderUSer));
// console.log(Object.entries(tinnderUSer));

// console.log(tinnderUSer.hasOwnProperty("isLoggedIn"));
// console.log(tinnderUSer.hasOwnProperty("isLogged"));


const course = {
    courseName: "mera funda",
    price: "324",
    courseInstructor: "Prashant"
}

// course.courseInstructor

// const {courseInstructor} = course;
const {courseInstructor: instructor} = course // Destructure :- 

// console.log(courseInstructor);
console.log(instructor);

// JSON

// {
//     "name": "Prashant",
//     "courseName": "js ka funda",
//     "price": "free"
// }


// JSON in Array form
// [
//     {},
//     {},
//     {}
// ]