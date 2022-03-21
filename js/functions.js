let name1 = "John";
let name2 = "Mary";
let name3 = "Peter";
let name4 = "Sally";
let name5 = "Jane";
let grrettext1 = "Good Night ";
function greet(name, greetText="Good Morning "){
    console.log("Hello " + name);
    console.log(greetText + name);
}

greet(name1, "Hey ");
greet(name2);
greet(name3, grrettext1); // Good Night Peter