const marvel_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["superman", "batman", "flash"]

// const multiverse_heros = marvel_heros.push(dc_heros) // it works on existing array
// const multiverse_heros = marvel_heros.concat(dc_heros) // it gives new array
// console.log(marvel_heros);
// console.log(multiverse_heros);
// console.log(marvel_heros[3][2]);

// const all_new_heros = [...marvel_heros, ...dc_heros] // "..." i.e. "spread operator"
// console.log(all_new_heros);

// const otherArr = [1,2,3,[4,5,6],7,[6,7,8,[4,2,6]]]

// const real_other_array = otherArr.flat(Infinity);
// console.log(real_other_array)



// console.log(Array.isArray("Prashant"))
// console.log(Array.from("Prashant"))
// console.log(Array.from({name: "Prashant"})) // intersting

let score1 = 100
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3));