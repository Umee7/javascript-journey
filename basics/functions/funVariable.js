// we cant access a variable that has function before declaration
iamNotWorking();

const iamNotWorking = function () {
    console.log("I make your work");
}