// Immediaty Invoked Function Expression IIFE
// Global variable pollution se bachne ke liye IIFE ka use krte h

(function chai(){
    console.log("DB connect")
})();

((name) => {
    console.log(`My name is ${name}`)
})("sameer");

((name) => {
    console.log(`My name is ${name}`)
})("Mohd") // show erro because jab hm next IIFE function provide krte h to previous wale m semicolon lagana pdta h ;