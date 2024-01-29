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
myParagraph.textContent = "I get to add my own text here using javascript instead of html";