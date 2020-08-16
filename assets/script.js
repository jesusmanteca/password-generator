// WIN: You get a password
// prompt comes up and ask how long you need a password
// 4 rules: small case, capital, charachers, numbers
// randomly select an array
// randomly select from each array
// loop to select up to the desired number of password charachters
// that password is given to user


// Possible parameters:
var smallCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "`", "/", "?",];
var numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];




var initiateProgram = function () {
    // establish the main thing... length of password
    var userPromptLength = window.prompt("How long do you want to your password? Has to be between 8 and 120 characters.")
    userPromptLength = parseInt(userPromptLength);
    console.log(userPromptLength)

    var emptyArray = [];

    var questionSeries = function () {
        
        var userPromptSmallCase = window.confirm("Do you want Small Case?")
        if (userPromptSmallCase) {
            emptyArray = emptyArray.concat(smallCase);
            // add smallCase array into password array parameters
        }
    
        var userPromptUpperCase = window.confirm("Do you want Upper Case?")
        if (userPromptUpperCase) {
            emptyArray = emptyArray.concat(upperCase);
        }
    
        var userPromptSpecialCharacters = window.confirm("Do you want Special Characters?")
        if (userPromptSpecialCharacters) {
            emptyArray = emptyArray.concat(specialCharacters)
        }
    
        var userPromptNumberChoices = window.confirm("Do you want numbers?")
        if (userPromptNumberChoices) {
            emptyArray = emptyArray.concat(numberChoices)
        }
    
        console.log("Possibilites selected:", emptyArray);
        console.log("emptyArray length:", emptyArray.length);
        
        var passwordArray = []
        
    
        //choose userPromptLength number of characters at random from that list and return it
        for (i = 0; i < userPromptLength; i++) {

            var magicBallNumber = Math.floor(Math.random()*emptyArray.length);
            console.log("This is the index number: ", magicBallNumber);

            var magicBallCharacter = emptyArray[magicBallNumber];
            console.log("This is the character indexed: ", magicBallCharacter);

            passwordArray = passwordArray.concat(magicBallCharacter)
            
        }

        console.log("Password Array: " + passwordArray.join(""))
        window.alert("Your super-secret password is: " + passwordArray.join(""))
        
        
    
    
    }
    
    if (userPromptLength >= 8 && userPromptLength <= 128) {
        questionSeries();
    }
    else {
        window.alert("Give me something to work here, choose between 8 and 120, please.");
        initiateProgram();
    };

}

// series of questions to establish parameters



initiateProgram()



// 


// the value chosen will be the new value for this variable

//make a password based on user input data
// console.log(userPromptLength);

// var randomNumberForSmallCase = Math.floor(Math.random()*smallCase.length)
// var randomNumberForUpperCase = Math.floor(Math.random()*upperCase.length)
// var randomNumberForspecialCharacters = Math.floor(Math.random()*specialCharacters.length)
// var randomNumberForNumberChoices = Math.floor(Math.random()*numberChoices.length)

// console.log(smallCase[randomNumberForSmallCase])
// console.log(upperCase[randomNumberForUpperCase])
// console.log(specialCharacters[randomNumberForspecialCharacters])
// console.log(numberChoices[randomNumberForNumberChoices])

// var allChoices = [smallCase, upperCase, specialCharacters, numberChoices];
// var emptyArray = [];

// console.log(allChoices)

// var password = [
//     smallCase[randomNumberForSmallCase],
//     upperCase[randomNumberForUpperCase],
//     specialCharacters[randomNumberForspecialCharacters],
//     numberChoices[randomNumberForNumberChoices],
// ];

// console.log(password)

// var concat = function () {
//     smallCase;
//     upperCase;
//     specialCharacters;
//     numberChoices;
//     var concatAll = emptyArray.concat(smallCase, upperCase, specialCharacters, numberChoices);
//     // console.log("All choices:", concatAll) 
//     return concatAll
// }
// console.log("Length of the whole choice bank:", concat().length)


// for (i=0; i<userPromptLength; i++) {
//     var passwordRound1 = Math.floor(Math.random()*concat().length);
//     console.log("Random index chosen:", passwordRound1)
//     var passwordReturn = concat()[passwordRound1]
//     console.log("Symbol for passcode number", [i + 1],"is", passwordReturn)
    
// }




