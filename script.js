// HTML  recalls variables
var pressStartHtml = document.querySelector("#pressStart");
var quizTimeHtml = document.querySelector("#quizTime");
var quizQuestionHtml = document.querySelector("#quizQuestion"); // This first question goes
var quizAnswersHtml = document.querySelector("#quizAnswers");
var oneHtml = document.querySelector("#oneHTML");
var twoHtml = document.querySelector("#twoHTML");
var threeHtml = document.querySelector("#threeHTML");
var fourHtml = document.querySelector("#fourHTML");
var QuizTime = document.querySelector("#quizTime");
// Question list
var questionOne = (question = {
    question: "What is 36 + 42",
    answersA: "64",
    answersB: "78",
    answersC: "76",
    answersD: "56",
});
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
var finalScore = 100;
var timeLeft = 55;
var i = 0;

// array of all objects that have question/answers
var questionAnswerArray = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
];
//correct answer array
var correctAnswerArray = [
    questionAnswerArray[0].answerC,
    questionAnswerArray[1].answerC,
    questionAnswerArray[2].answerC,
    questionAnswerArray[3].answerA,
];
//WHEN I click the start button
pressStartHtml.addEventListener("click", function() {
    quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
    console.log(questionAnswerArray[i]);
    oneHtml.innerHTML = questionAnswerArray[i].answerA;
    twoHtml.innerHTML = questionAnswerArray[i].answerB;
    threeHtml.innerHTML = questionAnswerArray[i].answerC;
    fourHtml.innerHTML = questionAnswerArray[i].answerD;
});

quizAnswers.addEventListener("click", function(event) {
    var targetHtmlElement = event.target;
    if (
        (targetHtmlElement.matches("#fourHtml") &&
            buttonFourHtml.innerHTML == correctAnswerArray[0]) ||
        (targetHtmlElement.matches("#twoHtml") &&
            buttonTwoHtml.innerHTML == correctAnswerArray[1]) ||
        (targetHtmlElement.matches("#oneHtml") &&
            buttonOneHtml.innerHTML == correctAnswerArray[2]) ||
        (targetHtmlElement.matches("#threeHtml") &&
            buttonThreeHtml.innerHTML == correctAnswerArray[3])
    ) {
        var correctAnswerMsg = document.createElement("div");
        correctAnswerMsg.innerHTML = "you got question " + (i + 1) + " Right! ✔️";
        document.getElementById("quizContainer").appendChild(correctAnswerMsg);

        setTimeout(function() {
            correctAnswerMsg.innerHTML = "";
        }, 1000);
    } else {
        //console.log('oops, that is not correct')

        var wrongAnswerMsg = document.createElement("div");
        wrongAnswerMsg.textContent =
            "Wrong!" + i + " was " + questionAnswerArray[i].answerC;
        document.getElementById("quizContainer").appendChild(wrongAnswerMsg);

        setTimeout(function() {
            wrongAnswerMsg.innerHTML = "";
        }, 1000);

        // take 10 points away from user and keep track of that in our finalScore variable
        finalScore = finalScore - 10;
        console.log(finalScore + "score after user gets it wrong");
    }
    i++;
    quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
    oneHtml.innerHTML = questionAnswerArray[i].answerA;
    twoHtml.innerHTML = questionAnswerArray[i].answerB;
    threeHtml.innerHTML = questionAnswerArray[i].answerC;
    fourHtml.innerHTML = questionAnswerArray[i].answerD;

    if ((quizQuestion.innerHTML = questionAnswerArray[3].question)) {
        var scoreBox = document.createElement("div");
        scoreBox.innerHTML = "you did it! your score is " + finalScore + "%";
        document.getElementById("scoreContainer").appendChild(scoreBox);
    }
});
console.log(finalScore + " score after answering");

// use appendList or appendChild div that shows the score

// // THEN a timer starts a countdown from a specified time (60sec) and I am presented with a question
// // timer function to start on that click event listener
// // and show a question from our array of question/answer objects
// // Timer that counts down from 5
// function countdown() {
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function() {
//         // As long as the `timeLeft` is greater than 1
//         if (timeLeft > 1) {
//             // Set the `textContent` of `timerEl` to show the remaining seconds
//             timerCountHtml.innerHTML = timeLeft + " seconds remaining";
//             // Decrement `timeLeft` by 1
//             timeLeft--;
//         } else if (timeLeft === 1) {
//             // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//             timerCountHtml.innerHTML = timeLeft + " second remaining HURRY UP";
//             timeLeft--;
//         } else {
//             // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//             timerCountHtml.innerHTML = "0";
//             // Use `clearInterval()` to stop the timer
//             clearInterval(timeInterval);
//             // Call the `displayMessage()` function
//         }
//     }, 1000);
// }
// tAnswerArray = [questionOne.answersC, questionTwo.answersC];
// // var i = 0;
// varfinalScore = 100;
// var timeLeft = 55;
// // var timerCount;
// // Arrays used to create blanks and letters on screen
// // var winCounter = 0;
// // var loseCounter = 0;
// var questions = [
//     "questionsOne",
//     "questionTwo",
//     "questionThree",
//     " questionFour",
// ];
// // When I press the start button
// pressStart.addEventListener("click", function() {
//     quizQuestion.innerHTML = questionAnswerArray[0].question;
//     bottonOneHTML.innerHTML = questionAnswerArray[0].answersA;
//     buttonTwoHTML.innerHTML = questionAnswerArray[0].answersB;
//     buttonThreeHTML.innerHTML = questionAnswerArray[0].answersC;
//     buttonFourHTML.innerHTML = questionAnswerArray[0].answersD;

//     countdown();
// });
// //console.log(finalScore + "score");

// quizAnswers.addEventListener("click", function(event) {
//     var targetHtmlElement = event.target;
//     if (argetHtmlElement.matches("button") === true) {
//         i++;
//         console.log(i);
//         console.log(targetHtmlElement + "good, you selected answer");
//         quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
//         bottonOneHTML.innerHTML = questionAnswerArray[i].answersA;
//         buttonTwoHTML.innerHTML = questionAnswerArray[i].answersB;
//         buttonThreeHTML.innerHTML = questionAnswerArray[i].answersC;
//         buttonFourHTML.innerHTML = questionAnswerArray[i].answersD;

//         if (targetHtmlElement.matches("#fourtml")) {
//             console.log("right answer!");
//             var correctAnswerMsg = document.createElement("div");
//             correctAnswerMsg.innerHTML = "Right!";
//             document.getElementById("quizContainer").appendChild(correctAnswerMsg);
//         } else {
//             console.log("Wrong!");
//             var correctAnswerMsg = document.createElement("div");
//             correctAnswerMsg.innerHTML = "Worng!";
//             document.getElementById("quizContainer").appendChild(correctAnswerMsg);
//             finalScore = finalScore - 10;
//             console.log(finalScore + "score aftar you get wrong answer");
//         }
//     }
// });

// // Timer that counts down from 5
// function countdown() {
//     var timeLeft = 45;

//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function() {
//         // As long as the `timeLeft` is greater than 1
//         if (timeLeft > 1) {
//             // Set the `textContent` of `timerEl` to show the remaining seconds
//             quizTimer.textContent = timeLeft + " seconds remaining";
//             // Decrement `timeLeft` by 1
//             timeLeft--;
//         } else if (timeLeft === 1) {
//             // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//             quizTimer.textContent = timeLeft + " second remaining";
//             timeLeft--;
//         } else {
//             // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//             quizTimer.textContent = "";
//             // Use `clearInterval()` to stop the timer
//             clearInterval(timeInterval);
//             // Call the `displayMessage()` function
//         }
//     }, 1000);
// }

// // function startTimer() {
// //     var timerInterval = setInterval(function() {
// //         if (gameEnded === true) {
// //             clearInterval(timerInterval);
// //             return;
// //         }
// //         timeLeft--;
// //         timerTag.textContent = timeLeft;
// //         if (timeLeft === 0) {
// //             clearInterval(timerInterval);
// //             endGame();
// //         }
// //     }, 1000);
// // }

// quizAnswers.addEventListener("click", function(event) {
//     var clickAnswer = event.target;
//     if (quizAnswers.matches("button") === true) {
//         console.log(clickAnswer + " You got right answer");
//     } else {
//         console.log("button not working try again");
//     }
// });

// //if target is just the list itself do nothing only want the list items
// // Attaches event listener to button

// //score.append('You got ' + numCorrect + ' questions out of ' +
// // questions.length + ' right!!!');
// // return score;
// // }

// // THEN a timer starts and I am presented with a question
// // WHEN I answer a question
// // THEN I am presented with another question
// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over
// // WHEN the game is over
// // THEN I can save my initials and my score-- >

// // HTML
// // var wordBlank = document.querySelector(".word-blanks");
// // var win = document.querySelector(".win");
// // var lose = document.querySelector(".lose");
// // var timerElement = document.querySelector(".timer-count");
// // var startButton = document.querySelector(".start-button");

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