// various variables for generatePassword function 
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specials = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?', '.', '_'];
var passwordLength = 8;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. prompt: password length, 8 - 128 characters long
  var passwordLength = parseInt(window.prompt("How many characters do you want your passwords to be?")); {
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("Please enter a numeric value between 8 and 128.");
    }
    console.log("Password length: " + passwordLength + " characters long.")
  }

  // 2. prompts: lowerCase, upperCase, numbers, special characters confirmation
  var charArray = [];
  lowerCaseConfirm = confirm("Would you like to include lowercase characters in your password? Press OK to confirm, cancel to exclude.")
  upperCaseConfirm = confirm("Would you like to include uppercase characters in your password? Press OK to confirm, cancel to exclude.")
  numbersConfirm = confirm("Would you like to include numbers characters in your password? Press OK to confirm, cancel to exclude.")
  specialsConfirm = confirm("Would you like to include special characters in your password? Press OK to confirm, cancel to exclude.")
    // no character types included 
  if (!lowerCaseConfirm && !upperCaseConfirm && !numbersConfirm && !specialsConfirm) {
    window.alert("Please include at least one character type presented to generate a password.")
    }
    // lowercase added to array if chosen
  if (lowerCaseConfirm) {
    charArray += charArray.concat(lowerCase);
    console.log("lowercase included in password")
  }
    // uppercase added to array if chosen
  if (upperCaseConfirm) {
    charArray += charArray.concat(upperCase);
    console.log("uppercase included in password")
  }
   // numbers added to array if chosen
  if (numbersConfirm) {
    charArray += charArray.concat(numbers);
    console.log("numbers included in password")
  }  
   // special characters added to array if chosen
  if (specialsConfirm) {
    charArray += charArray.concat(specials);
    console.log("special characters included in password")
  }

  // for loop runs every time and and picks characters at random and until number of characters is met
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    password += charArray.charAt(Math.floor(Math.random() * charArray.length));
    console.log(password);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
