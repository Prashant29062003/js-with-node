const quiz =[
    {
        title:"Quiz Application using javaScript.",
        question:"JavaScript is an ________ language.",
        option_a:"object-oriented",
        option_b:"object-based",
        option_c:"Procedural",
        option_d:"None of the above",
        answer:"object-oriented"
    },
    {
        title:"Let me see if you give this answer or not..!",
        question:"What does the iterator protocol say?",
        option_a:"An iterator is an object with a next() method that returns an object with one property - value.",
        option_b:"An iterator is an object with a next() method that returns an object with two properties - done and value.",
        option_c:"An iterator is an object with a next() method that returns an array with two elements.",
        option_d:"None of the above",
        answer:"An iterator is an object with a next() method that returns an object with two properties - done and value."
    },
    {
        title:"Quiz Application using javaScript.",
        question:"How do you supply data to an already running Generator?",
        option_a:"By calling the Generator’s reset method, supplying the data & starting the data flow again.",
        option_b:"By passing the data as a parameter to the Generator’s next method call.",
        option_c:"By calling the Generator’s update method with the data.",
        option_d:"There is no way to supply data to a running Generator.",
        answer:"By passing the data as a parameter to the Generator’s next method call."
    },
    {
        title:"Quiz Application using javaScript.",
        question:"How do you find the number with the highest value of x and y?",
        option_a:"top(x, y)",
        option_b:"Math.max(x, y)",
        option_c:"ceil(x, y)",
        option_d:"Math.ceil(x, y)",
        answer:"Math.max(x, y)"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"How can you detect the client's browser name?",
        option_a:"client.navName",
        option_b:"browser.name",
        option_c:"navigator.appName",
        option_d:"None of the above",
        answer:"navigator.appName"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"JavaScript is a _____ Side Scripting Language.",
        option_a:"Server",
        option_b:"Browser",
        option_c:"ISP",
        option_d:"None of the above",
        answer:"Browser"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"Why JavaScript is called as Lightweight Programming Language ?",
        option_a:"because JS is client side scripting",
        option_b:"because JS is available free of cost.",
        option_c:"because we can add programming functionality inside JS",
        option_d:"because JS can provide programming functionality inside but up to certain extend.",
        answer:"because JS can provide programming functionality inside but up to certain extend."
    },
    {
        title:"Quiz Application using javaScript.",
        question:"JavaScript is an ________ language.",
        option_a:"object-oriented",
        option_b:"object-based",
        option_c:"Procedural",
        option_d:"None of the above",
        answer:"object-oriented"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"JavaScript code can be called by using",
        option_a:"RMI",
        option_b:"Preprocessor",
        option_c:"Function / Method",
        option_d:"None of the above",
        answer:"Function / Method"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"Which of the following is not javascript data types?",
        option_a:"Null type",
        option_b:"Undefined type",
        option_c:"Number type",
        option_d:"All of the above",
        answer:"All of the above"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"Which statement defines closures in JavaScript?",
        option_a:"JavaScript is a function that is enclosed with references to its inner function scope",
        option_b:"JavaScript is a function that is enclosed with references to its lexical environment",
        option_c:"JavaScript is a function that is enclosed with the object to its inner function scope",
        option_d:"None of the above",
        answer:"JavaScript is a function that is enclosed with references to its lexical environment"
    },
]

const title = document.querySelector(".title");

const question = document.querySelector(".question");
// console.log(question.textContent);

const option_a = document.querySelector("#text-option-a");
// console.log(option_a.textContent);
const option_b = document.querySelector("#text-option-b");
// console.log(option_b.textContent);
const option_c = document.querySelector("#text-option-c");
// console.log(option_c.textContent);
const option_d = document.querySelector("#text-option-d");
// console.log(option_d.textContent);

const answer = document.querySelector(".answer");
// console.log(answer);

const submit = document.querySelector("#submit");

let currentQuestion = 0;
let score = 0;


    question.innerHTML = `Question-${currentQuestion + 1}: ${quiz[currentQuestion].question} `;
    option_a.innerHTML = quiz[currentQuestion].option_a;
    option_b.innerHTML = quiz[currentQuestion].option_b;
    option_c.innerHTML = quiz[currentQuestion].option_c;
    option_d.innerHTML = quiz[currentQuestion].option_d;
// quiz.forEach(function(elem,index){
//     question.innerHTML = `Question-${index + 1}: ${elem.question} `;
//     option_a.innerHTML = elem.option_a;
//     option_b.innerHTML = elem.option_b;
//     option_c.innerHTML = elem.option_c;
//     option_d.innerHTML = elem.option_d;
// })

submit.addEventListener("click", function(e){
    e.preventDefault();
    const checkedAnswer = document.querySelector("input[type ='radio']:checked");
    // console.log(checkedAnswer);

    if(checkedAnswer == null){
        alert("Select an option!");
    }else {
        if(checkedAnswer.nextElementSibling.textContent==quiz[currentQuestion].answer){
            score++;
            score+=10
        }
    }
    currentQuestion++;
    if(currentQuestion<quiz.length){
        question.innerHTML=`Question-${currentQuestion + 1}: ${quiz[currentQuestion].question} `;
        option_a.innerHTML=quiz[currentQuestion].option_a;
        option_b.innerHTML=quiz[currentQuestion].option_b;
        option_c.innerHTML=quiz[currentQuestion].option_c;
        option_d.innerHTML=quiz[currentQuestion].option_d;
    }else{
        alert(`Your Score ${score} out of ${(quiz.length)*10}`);
        location.reload();
    }
})