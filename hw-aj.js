// hw-aj.js — COMP 484 JavaScript Coding Exercises
// Author: AJ
// Note: Per assignment rules, use `var` for declarations, camelCase names, and semicolons everywhere.

/* ==============================
   Set 1: Advanced Syntax, Types, and Quirks
   ============================== */

/* Exercise 1: Complex Arithmetic and Standard Rules */
var complexResult = 3 + 5 * (10 / 2) - (8 - 4);
console.log("Exercise 1:", complexResult);

/* Exercise 2: Case Sensitivity Test */
var projectIdentifier = "COMP484";
// ProjectIdentifier = "JS_Advanced"; // This fails because JavaScript is case-sensitive; 'ProjectIdentifier' ≠ 'projectIdentifier'.
projectIdentifier = "JS_Advanced";
console.log("Exercise 2:", projectIdentifier);

/* Exercise 3: String Quoting Challenge */
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log("Exercise 3:", courseDescription);

/* Exercise 4: Escaping and Console Output */
var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log("Exercise 4:", errorMessage);

/* Exercise 5: Type Coercion with Non-Plus Operators */
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;
console.log("Exercise 5 (sub):", resultSubtraction);
console.log("Exercise 5 (mul):", resultMultiplication);
console.log("Exercise 5 typeof valueB in - :", typeof (valueA - valueB));
console.log("Exercise 5 typeof valueB in * :", typeof (valueA * valueB));


/* ==============================
   Set 2: Operators and Type Theory
   ============================== */

/* Exercise 6: Understanding null and undefined Types */
var unassignedVar;
var explicitNull = null;
console.log("Exercise 6 typeof unassignedVar:", typeof unassignedVar);
console.log("Exercise 6 typeof explicitNull:", typeof explicitNull);
/*
  In JavaScript, typeof null returns "object" due to a historical quirk in the language:
  the earliest implementation used a type tag for objects that overlaps with the null tag (0).
  For backward compatibility, this behavior was never changed, so typeof null === "object".
*/

/* Exercise 7: Boolean Assignment and Type Identification */
var isBlocking = true;
console.log("Exercise 7 type (boolean):", typeof isBlocking);
isBlocking = "true";
console.log("Exercise 7 type (string):", typeof isBlocking);

/* Exercise 8: Invalid Variable Naming (commented out with explanations) */
// var 1invalidName = 0;     // Invalid: names cannot start with a number.
// var my variable = 1;       // Invalid: spaces are not allowed in identifiers.
// var $*weird = 2;           // Invalid: '*' is not allowed in identifiers (only letters, digits, _, $).

/* Exercise 9: Chained Shorthand Arithmetic */
var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log("Exercise 9:", counterValue);

/* Exercise 10: Prefix vs. Postfix Unary Operators */
var x = 10;
var y_post = x++; // Postfix: y_post gets old x (10), then x becomes 11.
console.log("Exercise 10 (postfix) y_post:", y_post, "x:", x);
x = 10;
var z_pre = ++x;  // Prefix: x is incremented first (to 11), then assigned to z_pre.
console.log("Exercise 10 (prefix) z_pre:", z_pre, "x:", x);


/* ==============================
   Set 3: Advanced Logic and Comparisons
   ============================== */

/* Exercise 11: Loose Equality and Coercion */
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean) {
  console.log("Exercise 11: 0 == false is true due to coercion.");
}
// Explanation: With '==', false is coerced to 0, so 0 == 0 → true.

/* Exercise 12: Strict Inequality Test */
var versionA = 10.0;
var versionB = "10.0";
if (versionA !== versionB) {
  console.log("Exercise 12: Not strictly equal (number vs. string).");
} else {
  console.log("Exercise 12: Strictly equal (unexpected).");
}

/* Exercise 13: Logical OR and AND Combination */
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;
if ( (isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired) ) {
  console.log("Exercise 13: Access granted.");
} else {
  console.log("Exercise 13: Access denied.");
}

/* Exercise 14: Simulating XOR using Nested Conditionals */
var conditionA = true;
var conditionB = false;
if ( (conditionA || conditionB) && !(conditionA && conditionB) ) {
  console.log("Exercise 14: XOR Success");
} else {
  console.log("Exercise 14: XOR Fail");
}

/* Exercise 15: Converting IF/ELSE to Ternary Operator */
var scriptLoadType = "deferred";
var loadStatus;
if (scriptLoadType === "deferred") {
  loadStatus = "Non-blocking";
} else {
  loadStatus = "Potentially Blocking";
}
console.log("Exercise 15 (if/else):", loadStatus);
var loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log("Exercise 15 (ternary):", loadStatusTernary);


/* ==============================
   Set 4: Integration and Application
   ============================== */

/* Exercise 16: Commenting and Code Structure */
/*
  calculateRenderTime: computes an estimate of time spent parsing HTML,
  building the DOM, downloading/compiling/executing JS, and applying CSS,
  then returns a combined "render budget" value.
*/
function calculateRenderTime() {
  // Implementation would gather timing metrics (e.g., performance.timing) and compute totals.
}

/* Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY) */
var today = new Date();
var mm = today.getMonth() + 1; // Month is zero-indexed
var dd = today.getDate();
var yyyy = today.getFullYear();
// Zero-pad month/day to two digits:
var mmStr = (mm < 10) ? "0" + mm : "" + mm;
var ddStr = (dd < 10) ? "0" + dd : "" + dd;
var formatted = "Today is " + mmStr + "/" + ddStr + "/" + yyyy;
console.log("Exercise 17:", formatted);

/* Exercise 18: Mixed Type Arithmetic Explanation */
var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1 - val2;
console.log("Exercise 18 sumResult:", sumResult);
console.log("Exercise 18 diffResult:", diffResult);
/*
  The '+' operator triggers string concatenation when one operand is a string,
  so 20 + "5" → "205". Subtraction ('-') always performs numeric coercion,
  so 20 - "5" → 15 (string "5" is coerced to number 5).
*/

/* Exercise 19: Conditional based on Type Check */
var dataInput = 484;
if (typeof dataInput === "number") {
  console.log("Exercise 19: Input is numeric.");
} else {
  dataInput = true;
  console.log("Exercise 19 new type:", typeof dataInput);
}

/* Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual) */
/*
  If this script is placed in the <head> without 'defer' or 'async', it may run
  before the DOM is built. document.getElementById('status') would return null,
  and setting innerHTML would cause: "Cannot set property 'innerHTML' of null".
  Using 'defer', placing the script before </body>, or waiting for DOMContentLoaded
  ensures the element exists before manipulation.
*/
// Standard sequence to inject an <h1> into the document body:
function injectInteractiveHeader() {
  var h1 = document.createElement("h1");
  h1.textContent = "Interactive Layer Loaded";
  document.body.appendChild(h1);
}
// Example safe usage in browsers:
// document.addEventListener("DOMContentLoaded", injectInteractiveHeader);
