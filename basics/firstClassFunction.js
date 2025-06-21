// Can return a function itself
const greeting = () => {
    return function () {
        console.log("Hey there!!, I'm a function 👋");
    }
}

//can store function in a variable
const iamGreeting = greeting();
iamGreeting();

// another way to store function in a variable
const weirdVariable = function weirdFunction() {
    console.log("I'm a weird function");
}

weirdVariable();