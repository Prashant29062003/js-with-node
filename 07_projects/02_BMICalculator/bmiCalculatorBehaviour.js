const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = parseInt(document.querySelector("#results").value)

    if(height === 0 || height<=0 || isNaN(height)){
        results.innerHTML = "Please give a valid height..!"
    }
});
