
// ************ Tasks ****************

// ✅ 1) Write a function to check if a value is truthy or falsy.
// ✅ 2) Write a program that checks if a number is even or odd using if-else and ternary operator.
// ✅ 3) Write a function that prints a message after 2 seconds using setTimeout.
// ✅ 4) Create a digital clock using setInterval.
// ✅ 5) Given an array of numbers, return a new array of squared values using map().
// ✅ 6) Filter even numbers from an array using filter().

// ✅ 7) Convert an object into variables using destructuring.
// ✅ 8) Merge two arrays using the spread operator.
// ✅ 9) Fetch data from a public API and display it.


/* Question 10
   Build a simple To-Do List App with the following features:
   Add tasks.
   Remove tasks.
   Mark tasks as complete.
Use array methods (map, filter, forEach) for operations. */


//...........Question1..........
function checkTruthyFalsy(val) {
    if (val) {
        console.log(`${val} is truthy`);
    } else {
        console.log(`${val} is falsy`);
    }
}

checkTruthyFalsy(null); // Output: null is falsy
checkTruthyFalsy("Hello"); // Output: Hello is truthy
checkTruthyFalsy(0); // Output: 0 is falsy
checkTruthyFalsy(1); // Output: 1 is truthy


//............ Question2 .........

let score = 35;
//using if else
if (score % 2 == 0) {
    console.log("number is even")
}
else {
    console.log("number is odd")
}

//using ternary
const checkNumber = score % 2 == 0 ? "number is even" : "number is odd"
console.log(checkNumber)




//.......... Question3...............
// setInterval(() => {
//     function printMessage(msg) {
//         return `hello ${msg}`
//     }
//     const result = printMessage("sawera how are you")
//     console.log(result)

// }, 2000)


//........Question4
// function digitalClock() {
//     setInterval(() => {
//         let time = new Date().toLocaleTimeString();
//         console.log(time)

//     }, 1000);
// }
// digitalClock();



//.........Question 5..........
let arrayyss = [2, 3, 4, 5, 6];
const newValue = arrayyss.map((val) => {
    return val * 2;
});
console.log(newValue)




//........ Question 6.............
let numberArray = [2, 3, 5, 7, 8, 10, 12, 11, 14, 15];
const evenNumbers = numberArray.filter((num) => {
    return num % 2 == 0;
})
console.log(evenNumbers);




//.........Question 7..........

const obj1 = {
    name: "sawera",
    age: 26,
    address: "islamabad"
}

const { name, age, address } = obj1;



//............Question 8...

const countries = ["pk", "ind", "bangladesh"];
const cities = ["isb", "karachi", "peshawar"];

const mergedArray = [...countries, ...cities];
console.log(mergedArray);



//...........Question 9

const api_url = "https://jsonplaceholder.typicode.com/posts"
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
}
getData();


 
 