console.log("Quiz time");
// HTML  recalls variables
var pressStartHTML = document.querySelector("pressStart");
var quizTimeHTML = document.querySelector("#quizTime");
var quizQuestion = document.querySelector("#quizQuestion"); // This first question goes
var quizAnswers = document.querySelector("#quizAnswers");
var oneHTML = document.querySelector("#oneHTML");
var twoHTML = document.querySelector("#twoHTML");
var threeHTML = document.querySelector("#threeHTML");
var fourHTML = document.querySelector("#fourHTML");
var quizTime = document.querySelector("#quizTime");
// var = "";
// var = 0;
// var = 0;
// var = 0;
// var loseCounter = 0;
// var isWin = false;

// var timerCount;
// Arrays used to create blanks and letters on screen
var questions = [
    "questionsOne",
    "questionTwo",
    "questionThree",
    " questionFour",
];
//var answers = ["answerB", "answerC", "answerC", "answerA"];
// var wrongAnswer = [];
var questionOne = {
    question: "What is 36 + 42",
    answersA: "64",
    answersB: "78",
    answersC: "76",
    answersD: "56",
};
var questionTwo = {
    question: "What is 8 x 12?",
    answersA: "88",
    answersB: "112",
    answersC: "96",
    answersD: "86",
};
var questionThree = {
    question: "What is 30 / 3?",
    answersA: "3",
    answersB: "5",
    answersC: "10",
    answersD: "96",
};
var questionFour = {
    question: "What is 16 / 4?",
    answersA: "4",
    answersB: "6",
    answersC: "3",
    answersD: "16",
};
pressStart.addEventListener("click", function() {
    quizQuestion.innerHTML = questionOne.question;
    console.log(questionOne.question);
    oneHTML.innerHTML = questionOne.answersA;
    twoHTML.innerHTML = questionOne.answersB;
    threeHTML.innerHTML = questionOne.answersC;
    fourHTML.innerHTML = questionOne.answersD;

    countdown();
    console.log(countdown());
});

// Timer that counts down from 5
function countdown() {
    var timeLeft = 45;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            quizTimer.textContent = timeLeft + " seconds remaining";
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            quizTimer.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            quizTimer.textContent = "";
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
        }
    }, 1000);
}

quizAnswers.addEventListener("click", function(event) {
    var clickAnswer = event.target;
    if (quizAnswers.matches("button") === true) {
        console.log(clickAnswer + " You got right answer");
    } else {
        console.log("button not working try again");
    }
});



















































// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score-- >

// HTML
// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start-button");

// var chosenWord = "";
// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
// var timer;
// var timerCount;

// // Arrays used to create blanks and letters on screen
// var lettersInChosenWord = [];
// var blanksLetters = [];

// // Array of words the user will guess
// var words = ["variable", "array", "modulus", "object", "function", "string", "boolean"];

// // The init function is called when the page loads
// function init() {
//     getWins();
//     getlosses();
// }

// // The startGame function is called when the start button is clicked
// function startGame() {
//     isWin = false;
//     timerCount = 10;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     renderBlanks()
//     startTimer()
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//     wordBlank.textContent = "YOU WON!!!🏆 ";
//     winCounter++;
//     startButton.disabled = false;
//     setWins();
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//     wordBlank.textContent = "GAME OVER";
//     loseCounter++;
//     startButton.disabled = false;
//     setLosses();
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//         timerCount--;
//         timerElement.textContent = timerCount;
//         if (timerCount >= 0) {
//             // Tests if win condition is met
//             if (isWin && timerCount > 0) {
//                 // Clears interval and stops timer
//                 clearInterval(timer);
//                 winGame();
//             }
//         }
//         // Tests if time has run out
//         if (timerCount === 0) {
//             // Clears interval
//             clearInterval(timer);
//             loseGame();
//         }
//     }, 1000);
// }

// // Creates blanks on screen
// function renderBlanks() {
//     // Randomly picks word from words array
//     chosenWord = words[Math.floor(Math.random() * words.length)];
//     lettersInChosenWord = chosenWord.split("");
//     numBlanks = lettersInChosenWord.length;
//     blanksLetters = [];
//     // Uses loop to push blanks to blankLetters array
//     for (var i = 0; i < numBlanks; i++) {
//         blanksLetters.push("_");
//     }
//     // Converts blankLetters array into a string and renders it on the screen
//     wordBlank.textContent = blanksLetters.join(" ");
// }

// // Updates win count on screen and sets win count to client storage
// function setWins() {
//     win.textContent = winCounter;
//     localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//     lose.textContent = loseCounter;
//     localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//     // Get stored value from client storage, if it exists
//     var storedWins = localStorage.getItem("winCount");
//     // If stored value doesn't exist, set counter to 0
//     if (storedWins === null) {
//         winCounter = 0;
//     } else {
//         // If a value is retrieved from client storage set the winCounter to that value
//         winCounter = storedWins;
//     }
//     //Render win count to page
//     win.textContent = winCounter;
// }

// function getlosses() {
//     var storedLosses = localStorage.getItem("loseCount");
//     if (storedLosses === null) {
//         loseCounter = 0;
//     } else {
//         loseCounter = storedLosses;
//     }
//     lose.textContent = loseCounter;
// }

// function checkWin() {
//     // If the word equals the blankLetters array when converted to string, set isWin to true
//     if (chosenWord === blanksLetters.join("")) {
//         // This value is used in the timer function to test if win condition is met
//         isWin = true;
//     }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//     var letterInWord = false;
//     for (var i = 0; i < numBlanks; i++) {
//         if (chosenWord[i] === letter) {
//             letterInWord = true;
//         }
//     }
//     if (letterInWord) {
//         for (var j = 0; j < numBlanks; j++) {
//             if (chosenWord[j] === letter) {
//                 blanksLetters[j] = letter;
//             }
//         }
//         wordBlank.textContent = blanksLetters.join(" ");
//     }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//     // If the count is zero, exit function
//     if (timerCount === 0) {
//         return;
//     }
//     // Convert all keys to lower case
//     var key = event.key.toLowerCase();
//     var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split(
//         ""
//     );
//     // Test if key pushed is letter
//     if (alphabetNumericCharacters.includes(key)) {
//         var letterGuessed = event.key;
//         checkLetters(letterGuessed);
//         checkWin();
//     }
// });

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//     // Resets win and loss counts
//     winCounter = 0;
//     loseCounter = 0;
//     // Renders win and loss counts and sets them into client storage
//     setWins();
//     setLosses();
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame)