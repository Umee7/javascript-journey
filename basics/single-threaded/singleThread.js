// Js is single threaded languague 
// It can do only one thing at a time
// if any task needs time it gives it to worker(web api or browser and moves ahead) or help from its environment
// web api or browser gives callback once js is free
//let's watch it in action

console.log("I am first")
console.log("I am second")
setTimeout(()=> {
    console.log("um.... umm im a third dont forget me!! sorry for 0 milliseconds late")
}, 0)

for(let i = 4; i < 10; i++) {
    console.log(`I am ${i}`);
}
