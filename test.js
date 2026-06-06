import checkPassword from "./index.js";

console.log(checkPassword("abc"));        // Weak
console.log(checkPassword("abc123"));     // Medium
console.log(checkPassword("Abc@12345"));  // Strong
