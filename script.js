// Assignment Code
var generateBtn = document.querySelector("#generate");

var numString = "0123456789"
var numArray = numString.split("");
console.log(numArray)

var lowerString = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = lowerString.split("");
console.log(lowerArray);

var upperString = lowerString.toUpperCase()
var upperArray = upperString.split("");
console.log(upperArray);

var specialString= "!@#$%^&*+="
var specialArray = specialString.split("");
console.log (specialArray);


function askForOptions() {
  console.log("ask about password")
  var length = parseInt(prompt("how long do you want your password to be"));
  console.log(length)

  if(isNaN(length)) {
    alert ("is not a number");
    return;
  }
  if (length < 8) {
    alert ("is less than 8");
    return;
  }
  if (length > 128) {
    alert ("is more than 128");
    return;
  }
  isNum = confirm("would you like numbers")
  isLower = confirm ("would you like lower case letters ")
  isUpper = confirm ("would you like upper case letters ")
  isSpecial = confirm ("Would you like to use special letters")

  if(isNum === false && isLower === false && isUpper === false && isSpecial === false){
    alert ("Please select one character type");
    return;
  }
  var passwordOptions = {
    length: length,
    isNum,
    isUpper,
    isLower,
    isSpecial,
  }
  return passwordOptions;
}

function generatePassword() {
  var options = askForOptions();
  console.log(options)
  var superArray = [];
  var results = [];

  if (options.isNum === true ) {
    superArray = superArray.concat(numArray)
  }
  if (options.isLower === true) {
    superArray = superArray.concat(lowerArray)
  }
  if (options.isUpper === true) {
    superArray = superArray.concat(upperArray)
  }
  if (options.isSpecial === true) {
    superArray = superArray.concat(specialArray)
  }
  console.log(superArray)

  for(var i = 0; i < options.length; i++) {
    var index = Math.floor(Math.random() * superArray.length)
    var digit = superArray[index];
    results.push(digit);
    console.log(results)
  }
  return results.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("Get Started")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
