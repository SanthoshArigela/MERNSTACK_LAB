"use strict";
// Simple Types
let studentId = 101;
let studentName = "Manikanta";
let isPresent = true;
let marks = [85, 90, 88]; // Array
let studentInfo = [101, "Kalyan"]; // Tuple
// Special Types
let valueAny = "Hello";
valueAny = 123; // Allowed
let valueUnknown = "TypeScript";
// Proper type checking before using unknown
if (typeof valueUnknown === "string") {
    console.log(valueUnknown.toUpperCase());
}
// Void type (only used in functions normally)
function showMessage() {
    console.log("This is a void function");
}
// Null & Undefined
let emptyValue = null;
let notAssigned = undefined;
// Never type example
function throwError(message) {
    throw new Error(message);
}
// Output
console.log("ID:", studentId);
console.log("Name:", studentName);
console.log("Present:", isPresent);
console.log("Marks:", marks);
console.log("Student Info:", studentInfo);
showMessage();
