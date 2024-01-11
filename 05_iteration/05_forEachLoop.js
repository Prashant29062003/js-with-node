const coding = ['js','ruby','java', 'python',"cpp"];

// coding.forEach( function (item) {    // here we use call back funciton
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);    //here we just have to write function name only i.e. referencing (note: not execute it)

// coding.forEach( (item, index, arr)=> {      // here parameters in forEach are (item, index, wholeArray)
//     console.log(item, index, arr);
// } )

const myCoding = [
        {
            language: "java",
            languageFileName: "java"
        },
        {
            language: "javaScript",
            languageFileName: "js"
        },
        {
            language: "python",
            languageFileName: "py"
        },
        {
            language: "C++",
            languageFileName: "cpp"
        },
]

myCoding.forEach( (item)=> {
    console.log(item.language);
} )