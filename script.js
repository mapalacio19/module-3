// Assignment code here
function generatePassword() {
  var length = Totlength, 
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Get references to the generate element
var generateBtn = document.querySelector("#generate");

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set static variables
  
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

// Prompts (user start)

window.onload = alert("Welcome! Please click 'Generate password' to start");

// Password generation

function generatePass() {
  var allChars = [];
  var resultPass = "";
}

// Dynamic variables

  var Totlength = prompt("How many characters would you like your password to be?");

  if(Totlength <8 || Totlength > 128){
    alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
  }

// Confirm character conditions

  else{
    if(confirm("Would you like your password to contain upper case letters?")){
      Array.prototype.push.apply(allChars, abcUpperArr);
  }

    if(confirm("Would you like your password to contain lower case letters?")){
      Array.prototype.push.apply(allChars, abcLowerArr);
  }

    if(confirm("Would you like your password to contain numbers?")){
      Array.prototype.push.apply(allChars, numArr);
  }

    if(confirm("Would you like your password to contain symbols?")){
      Array.prototype.push.apply(allChars, symArr);
  }

    if(allChars.length===0){
      alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
  }
  }

// Display the result

    document.getElementById("password").innerHTML = resultPass;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

