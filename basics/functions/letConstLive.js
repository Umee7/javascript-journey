// Throws reference error
console(iamAConst);

const iamAConst = "Let me live";

// JS does this internally
// const iamAConst; does not assign any value, in dead state
// console.log(iamAConst) Reference error
// const iamAConst = "Let me live"; now initialized

