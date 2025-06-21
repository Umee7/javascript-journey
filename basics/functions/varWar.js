// Prints undefined
console.log(score);

var score = 10;

//prints 10
console.log(score);

// Here's why - Js does this internally
// var score = undefined; hoisted score
//console.log(score) tells undefined
//var score = 10; now score = 10
//console.log(score) tells 10