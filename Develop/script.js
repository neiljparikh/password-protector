// Assignment Code

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    var password = "";
    var characteroptions = "";
    var passlength = prompt("Please input the desired length of your password. It must be between 8 and 128 characters long.");
  }

  //Character Length Prompt
    if (passlength<8) || (passlength>128) {
      alert("Character requirements not met!");
      return;
    }
      //Lowercase Prompt
    var hasLowercase = confirm("Would you like to include lowercase letters?");
    if (hasLowercase) {
      characteroptions += lowerCase;
    }

    var hasUppercase = confirm("Would you like to include uppercase letters?")
    if (hasUppercase) {
      characteroptions += upperCase;
    }


    


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword;
