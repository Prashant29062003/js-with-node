const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener("click", (e)=>{
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }else if(e.target.id === 'gray'){
            body.style.backgroundColor = 'gray';
        }else if(e.target.id === 'green'){
            body.style.backgroundColor = 'green';
        }else{
            console.log("please click at right position as instructed...!");
        }
    })
});

console.log(buttons);

