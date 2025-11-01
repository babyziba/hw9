
var complexResult = 3 + 5 * (10 / 2) - (8 - 4);
console.log("Exercise 1:", complexResult);

var projectIdentifier = "COMP484";
projectIdentifier = "JS_Advanced";
console.log("Exercise 2:", projectIdentifier);


var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log("Exercise 3:", courseDescription);


var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log("Exercise 4:", errorMessage);


var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;
console.log("Exercise 5 (sub):", resultSubtraction);
console.log("Exercise 5 (mul):", resultMultiplication);
console.log("Exercise 5 typeof valueB in - :", typeof (valueA - valueB));
console.log("Exercise 5 typeof valueB in * :", typeof (valueA * valueB));



var unassignedVar;
var explicitNull = null;
console.log("Exercise 6 typeof unassignedVar:", typeof unassignedVar);
console.log("Exercise 6 typeof explicitNull:", typeof explicitNull);

var isBlocking = true;
console.log("Exercise 7 type (boolean):", typeof isBlocking);
isBlocking = "true";
console.log("Exercise 7 type (string):", typeof isBlocking);


var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log("Exercise 9:", counterValue);


var x = 10;
var y_post = x++; 
console.log("Exercise 10 (postfix) y_post:", y_post, "x:", x);
x = 10;
var z_pre = ++x;  
console.log("Exercise 10 (prefix) z_pre:", z_pre, "x:", x);



var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean) {
  console.log("Exercise 11: 0 == false is true due to coercion.");
}

var versionA = 10.0;
var versionB = "10.0";
if (versionA !== versionB) {
  console.log("Exercise 12: Not strictly equal (number vs. string).");
} else {
  console.log("Exercise 12: Strictly equal (unexpected).");
}


var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;
if ( (isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired) ) {
  console.log("Exercise 13: Access granted.");
} else {
  console.log("Exercise 13: Access denied.");
}


var conditionA = true;
var conditionB = false;
if ( (conditionA || conditionB) && !(conditionA && conditionB) ) {
  console.log("Exercise 14: XOR Success");
} else {
  console.log("Exercise 14: XOR Fail");
}


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


function calculateRenderTime() {
  
}


var today = new Date();
var mm = today.getMonth() + 1; 
var dd = today.getDate();
var yyyy = today.getFullYear();

var mmStr = (mm < 10) ? "0" + mm : "" + mm;
var ddStr = (dd < 10) ? "0" + dd : "" + dd;
var formatted = "Today is " + mmStr + "/" + ddStr + "/" + yyyy;
console.log("Exercise 17:", formatted);


var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1 - val2;
console.log("Exercise 18 sumResult:", sumResult);
console.log("Exercise 18 diffResult:", diffResult);

var dataInput = 484;
if (typeof dataInput === "number") {
  console.log("Exercise 19: Input is numeric.");
} else {
  dataInput = true;
  console.log("Exercise 19 new type:", typeof dataInput);
}


function injectInteractiveHeader() {
  var h1 = document.createElement("h1");
  h1.textContent = "Interactive Layer Loaded";
  document.body.appendChild(h1);
}

