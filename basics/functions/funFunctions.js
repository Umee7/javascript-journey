// This runs even if it is declared later 
funFunction();

// JS first finds "Function" declarations in hoisting phase
function funFunction() {
    console.log("This is a fun function");
}


// we cant access a const or let that stores function before declaration because it is not hoisted just there like a dead piece untill we initialize it value, if we try to access it before initialization it will throw an error
// iamNotWorking();

// const iamNotWorking = function () {
//     console.log("I make your work");
// }

// So what JS does behind the scenes is first hoist everything goes to all code but all it does is structure them , if there is any functions it hoists them and then if any const or let just remebers it exists but doesnt assing anything, if found a var it will assign them with undefined and in second pass actually does things
