const imAnObject = {
    method: function() {
        console.log('I am a method of an object');
    },
    work: function() {
        console.log('I wanna sleep');
    } 
}

const imHisBrother = Object.create(imAnObject);
imHisBrother.method();
imHisBrother.work = function() {
    console.log("I am not like him, i code!!💻");
};
imHisBrother.work();

// Js is a prototype-based programming languague, meaning that objects inherit properties from other objects. and they dont need to be in a class

// iamObject is a prototype 
// so more of like prototype is a mentor and students who learned from him can he mentors, with new qualities