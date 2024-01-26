const clock = document.querySelector("#clock");


setInterval((e)=>{
    const date = new Date();
    // console.log(date.toLocaleTimeString());
    // clock.innerHTML = date.toLocaleTimeString();     // ---> it shows only current time
    clock.innerHTML = date.toLocaleString()     // ---> it shows both date and current time
},1000);