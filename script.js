// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerc = ["abcdefghijklomnpqrstuvwxyz"];
var upperc = ["ABCDEFGHIJKLOMNPQRSTUVWXYZ"];
var numbers = ["123456789"];
var spclc = ["@%+/\\ !#$^?:,(){}[}~-_."];
var chosenc = "";

// Write password to the #password input
function enterpassword() {
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

function generatePassword() {
  var result = "";
  var length = prompt("Passwords have to be between 8 and 128 characters");
  if(isNaN(length)) {
    alert("You must input a password.");
    return generatePassword();
    }
    if(length < 8 || length> 128) {
      alert("Please chose numbers between 8 and 128");
      return generatePassword();
    }

var hasup = confirm("Include uppercase letters?");
var haslow = confirm("Include lowercase letters?");
var hasnum = confirm("Do you want numbers?");
var hasspcl = confirm("Do you want special characters?");
  if(!hasup&&!haslow&&!hasnum&&!hasspcl) {
    alert("there must be at least one character type.");
    hasup = confirm("Would you like to use uppercase letters?");
    haslow = confirm("Would you like to use lowercase letters?");
    hasnum = confirm("Would you like to use numbers?");
    hasspcl = confirm("Would you like to use special characters?");
  }

  window.addEventListener('load', function() {
    generateNewPassword();
  });

function generatePassword() {
  var password = "";

  var allowed = {};
  if (hasup) password += rando(allowed.hasup = "ABCDEFGHIJKLOMNPQRSTUVWXYZ");
  if (haslow) password += rando(allowed.haslow = "abcdefghijklomnpqrstuvwxyz");
  if (hasnum) password += rando(allowed.hasnum = "123456789");
  if (hasspcl) password += rando(allowed.hasspcl = "@%+/\\ !#$^?:,(){}[}~-_.");
  for (let i = 0; i < length; ++i) {
    let random = math.floor(math.random().length);
    password = chosenc[random]
  return result + password
}}};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

