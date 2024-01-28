// generate random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;
const startChanginColor = function () {
    if(!intervalId){
        intervalId = setInterval(chnageBgColor, 1000);
    }
    function chnageBgColor(){
        document.body.style.backgroundColor = randomColor();
        document.querySelector("#banner").style.color = randomColor();
    }
}
const stopChanginColor = function () {
    clearInterval(intervalId);
    intervalId = null;
 }
document.querySelector("#start").addEventListener("click", startChanginColor)
document.querySelector("#stop").addEventListener("click", stopChanginColor)
