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
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "`", "/", "?", "_", "-", "+",];
var numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

var initiateProgram = function () {
    // establish the main thing... length of password
    var userPromptLength = window.prompt("How long do you want your password? (8 and 120 characters)")
    // parseInt makes it into a digit
    userPromptLength = parseInt(userPromptLength);
    // console.log(userPromptLength)



    // this will hold the possible range of possibilities
    var emptyArray = [];
    var passwordArray = []


    // 2. questionSeries is a function to fill the emptyArray bucket by asking a series of questions that will bring in a range of possibilities 
    var questionSeries = function () {

        var questions = function(){
            var userPromptSmallCase = window.confirm("Do you want Small Case?")
            var userPromptUpperCase = window.confirm("Do you want Upper Case?")
            var userPromptSpecialCharacters = window.confirm("Do you want Special Characters?")
            var userPromptNumberChoices = window.confirm("Do you want Numbers?")
            if (userPromptSmallCase) {
                emptyArray = emptyArray.concat(smallCase);
            } if (userPromptUpperCase) {
                emptyArray = emptyArray.concat(upperCase);
            } if (userPromptSpecialCharacters) {
                emptyArray = emptyArray.concat(specialCharacters)
            } if (userPromptNumberChoices) {
                emptyArray = emptyArray.concat(numberChoices)
            }
        }

        // Once the variable is introduced, then you execute the function
        questions();

        // if after you execute the questions function the bucket is stil as empty as with what you started, execute the questions function again until it has something in it
        if (emptyArray.length === 0){
            window.alert("Choose something, let's try it again, yeah?")
            questions();
        }

        // do a for loop - a function that runs a number of times as long as the size of our password. We want every digit to be randomly selected. 
        for (i = 0; i < userPromptLength; i++) {

            // I call this the Magic Ball Number - it will pick a number at random from 0 to 1 and multiply it by as many items in the bucket - each item gets an equal opportunity to be selected. The number gets rounded down so it can start at 0 since that's the first index and indexes come in whole numbers. 
            var magicBallNumber = Math.floor(Math.random() * emptyArray.length);

            // After matching the Magic Ball Number to an actual item from the bucket by using the index spot that matches the ball, you get a character. 
            var magicBallCharacter = emptyArray[magicBallNumber];

            // Find out more about push **vs** concat
            // Everytime the loop goes around, a different character will emerge which will be then be placed in the actual password array. It'll do so into an array of different numbers but that's okay, there's a way to combine all of it. 
            passwordArray = passwordArray.concat(magicBallCharacter)

        }// Now we have a filled Password Array
        
        
        console.log("Possibilites selected \n Items in the Bucket:", emptyArray);
    }

    // 1. This starts the magic after the variable is already defined. At the end of the questionSeries we'll have our emptyArray bucket  and our passwordArray bucket filled
    if (userPromptLength >= 8 && userPromptLength <= 120) {
        questionSeries();
    }
    else {
        window.alert("Give me something to work here, choose between 8 and 120, please.");
        this.initiateProgram();
    };

    //This outputs the html with the stuff (new password) from the passwordArray bucket after it formats it all into string
    var newPasswordArray
    var generatePassword = function () {
        // getting the html id and passing through it the actual password message
        document.getElementById("password").innerHTML = "Your super-secret " + userPromptLength + " digit password is: " + passwordArray.join("")
    }

    newPasswordArray = passwordArray.join("")
    console.log("Password Array: " + newPasswordArray)
    generatePassword();


    // if (emptyArray.length === 0) {
    //     questionSeries();
    // }



}
