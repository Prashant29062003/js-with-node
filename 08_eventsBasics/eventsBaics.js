// document.getElementById("owl").onclick = function(){
//     alert("owl clicked");
// }

// attachEvent
// jquery - on

// addEventListener --- objects example

// type, timeStamp, defaultPrevented
// tagret, toElement, srcElement, currentTarget
// clientX, clientY, screenX, scrreenY
// altKey, ctrKey, shiftkey, keyCode


// Syntax
// element.addEventListener(event, function, useCapture); 
// Generally value of useCapture = false; i.e. it stop the propagation in catureing down phase and allows bubbling up phase

// example  bubbling up phase

// The bubbling phase, which is the last phase, is the reverse of the capturing phase. In this phase, the event bubbles up the target element through its parent element, the ancestor, to the global window object. By default, all events you add with addEventListener are in the bubble phase.
// by default third parameter - is false i.e. it event handler object gives bubbling phase 
// it has an object called stopPropagation(), it basically acts as prevent default function i.e. it not propagate further more.
// document.getElementById("images").addEventListener("click", (e) => {
//     console.log(e)
//     console.log("images")
// }, false);
// document.getElementById("owl").addEventListener("click", (e) => {
//     console.log(e)
//     console.log("owl");
//     e.stopPropagation();
// }, false);


// // example  capturing down phase

// document.getElementById("images").addEventListener("click", (e) => {
//     console.log(e)
//     console.log("images")
// }, false);
// document.getElementById("owl").addEventListener("click", (e) => {
//     console.log(e)
//     console.log("owl");
//     e.stopPropagation();
// }, false);

document.getElementById("google").addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation();
    // e.stopImmediatePropagation()
    console.log("goolge clicked");
}, false)

document.querySelector("#images").addEventListener("click", function(e) {
    console.log(e.target.parentNode);
    console.log(e.target.id);
    if(e.target.tagName === "IMG"){
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    // removeIt.parentNode.removeChild(removeIt);
})