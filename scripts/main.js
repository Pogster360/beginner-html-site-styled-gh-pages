// First I need to initialise the scripts in html with the script cmd just before the body tag ends

// This creates a constant function that will find the h1 tag in html
// you can use tags of all types you can also use id to define which tags you want to use
const myHeading = document.querySelector("h1");

// this will set the text in h1 to Hello World
myHeading.textContent = "Big Header";

// my practice with querySelector
const myTitle = document.querySelector("title");
myTitle.textContent = "Hello World";

// added my own paragraph with id element for testing purposes
const myParagraph = document.getElementById("test");
// myParagraph.textContent = "I get to add my own text here using javascript instead of html";

// JavaScript can be run with out using html elements, it will just run the function and display as a pop up before the html loads
// simple function to test if iceCream = chocolate
// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("yay it is chocolate ice cream");
// } else {
//     alert("This is not chocolate ice cream");
// }

// // functions run in order until all functions are completed
// iceCream = "vanilla"
// if (iceCream === "chocolate") {
//     alert("yay it is chocolate ice cream");
// } else {
//     alert("This is not chocolate ice cream");
// }

// creating a simple function with multiple variables
function simpleEquation(num1, num2, num3) {
    let result = (num1 + num2) * num3 - num1;   
    return result;
}

myParagraph.textContent = "The answer to (12 + 7) * 4 - 12 = " + simpleEquation(12, 7, 4)