// Assignment Code

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "\"", "<", ">", ",", ".", "?", "/"];



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    var password = "";
    var characteroptions = [];
    var passlength = prompt("Please input the desired length of your password. It must be between 8 and 128 characters long.");
  }

  //Character Length Prompt
    if (passlength<8 || passlength>128) {
      alert("Character requirements not met!");
      return;
    }
    
  //Lowercase Prompt
    var hasLowercase = confirm("Would you like to include lowercase letters?");
    if (hasLowercase) {
      characteroptions.push(...lowerCase);
    }

  //Uppercase Prompt
    var hasUppercase = confirm("Would you like to include uppercase letters?")
    if (hasUppercase) {
      characteroptions.push(...upperCase);
    }

  //Numeric Prompt
    var hasNumbers = confirm("Would you like to include numbers?")
    if (hasNumbers) {
      characteroptions.push(...numbers);
    }
    
  //Special Character Prompt
    var hasSpecialchar = confirm("Would you like to include special characters?")
    if (hasSpecialchar) {
      characteroptions.push(...specialChar);
    }

  for (var i = 0; i < characteroptions.length; i++) {
    var charIndex = Math.floor(Math.random() * characteroptions.length);

    password += characteroptions[charIndex];
  }

  return password;
  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
