# Projects related to DOM

## project link
[Ckick here](https://stackblitz.com/edit/web-platform-wlty22?file=index.html)

# solution code

## project 1

```javascript
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

```

## Project 2 solution

```javascript
const form = document.querySelector("form");
// this usecase will give you empty as it get the input which is already present in input area i.e. empty/undefined
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === " " || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height not ${height}..!`;
    } else if (weight === " " || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight not ${weight}..!`;
    } else {
        // results.innerHTML = (weight)/(height**2);
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the results
        if(bmi<18.6){
            results.innerHTML = `<span>result: ${bmi} i.e. Under Weight.</span>`;
        }else if(bmi > 18.6 || bmi <24.9){
            results.innerHTML = `<span>result: ${bmi} i.e. Normal Weight.</span>`;
        }else{
            results.innerHTML = `<span>result: ${bmi} i.e. Over Weight.</span>`;
        }
        console.log(bmi);
    }


});

```