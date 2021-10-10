// HTML  recalls variables
var pressStartHtml = document.querySelector("#pressStart");
var quizTimeHtml = document.querySelector("#quizTimer");
// This first question goes
var quizQuestionHtml = document.querySelector("#quizQuestion");
var quizAnswersHtml = document.querySelector("#quizAnswers");
var oneHtml = document.querySelector("#oneHtml");
var twoHtml = document.querySelector("#twoHtml");
var threeHtml = document.querySelector("#threeHtml");
var fourHtml = document.querySelector("#fourHtml");
var minHtml = document.querySelector("#p");
var saveScoreBtn = document.querySelector("#saveScoreBtn");
var finalScore = document.querySelector("#finalScore");
var quizScore = document.querySelector("#quizScore");
var quizReset = document.querySelector("#quizReset");
var answerButton = document.querySelector(".ans");
var scoreContainer = document.querySelector("#scoreContainer");
var quizContainer = document.querySelector("#quizContainer");
// Question list
var questionOne = (question = {
    question: "What is 36 + 42?",
    answersA: "76",
    answersB: "78",
    answersC: "64",
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
    answersA: "3",
    answersB: "6",
    answersC: "4",
    answersD: "16",
};
var finalScore = 100;
var timeLeft = 40;
var i = 0;

// array of all objects that have question/answers
var questionAnswerArray = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
];
// array of all correct answers
var correctAnswerArray = [
    questionAnswerArray[0].answersC,
    questionAnswerArray[1].answersC,
    questionAnswerArray[2].answersC,
    questionAnswerArray[3].answersC,
];

var saveScoreArray = [];
var scoreBoard = {
    name: Name.value,
    score: finalScore,
};

function getLocal(saveScoreArray) {
    if (localStorage.getItem("final score") === null) {
        return saveScoreArray;
    } else {
        return JSON.parse(localStorage.getItem("final score"));
    }
}

function sortScore(saveScoreArray) {
    saveScoreArray = saveScoreArray.sort(function(a, b) {
        return a.score - b.score;
    });
    saveScoreArray = saveScoreArray.reverse();
    return saveScoreArray;
}

function resetQuiz() {
    // hided elements on loaded page
    document.querySelector(`#quizAnswers`).style.display = `none`;
    document.querySelector(`#lastPage`).style.display = `none`;
    p.setAttribute("style", "display:none");
    pressStartHtml.setAttribute("style", "display:block");
    return;
}
//when I click the start button
pressStartHtml.addEventListener("click", function() {
    quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
    console.log(questionAnswerArray[i]);
    oneHtml.innerHTML = questionAnswerArray[i].answersA;
    twoHtml.innerHTML = questionAnswerArray[i].answersB;
    threeHtml.innerHTML = questionAnswerArray[i].answersC;
    fourHtml.innerHTML = questionAnswerArray[i].answersD;
    countdown();
    document.querySelector(`#quizAnswers`).style.display = "block";
    document.querySelector(`#pressStart`).style.display = `none`;
});

quizAnswersHtml.addEventListener("click", function(event) {
    var targetHtmlElement = event.target;
    console.log(correctAnswerArray[i]);
    console.log(targetHtmlElement.innerHTML);

    if (correctAnswerArray[i] === targetHtmlElement.innerHTML) {
        var correctAnswerMsg = document.createElement("div");
        correctAnswerMsg.innerHTML = "you got question " + (i + 1) + " Right! ✔️";
        document.getElementById("quizContainer").appendChild(correctAnswerMsg);

        setTimeout(function() {
            correctAnswerMsg.innerHTML = " ";
        }, 1000);
    } else {
        finalScore -= 7;
        var wrongAnswerMsg = document.createElement("div");
        wrongAnswerMsg.textContent =
            "Wrong!" + i + " was " + questionAnswerArray[i].answerC;
        document.getElementById("quizContainer").appendChild(wrongAnswerMsg);

        setTimeout(function() {
            wrongAnswerMsg.innerHTML = "";
        }, 1000);
    }
    i = i + 1;
    console.log(questionAnswerArray[i]);
    console.log(questionAnswerArray);

    quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
    oneHtml.innerHTML = questionAnswerArray[i].answersA;
    twoHtml.innerHTML = questionAnswerArray[i].answersB;
    threeHtml.innerHTML = questionAnswerArray[i].answersC;
    fourHtml.innerHTML = questionAnswerArray[i].answersD;
    console.log(questionAnswerArray[i]);
    console.log(questionAnswerArray);
    if (quizQuestion.innerHTML === questionAnswerArray[3].question) {
        var scoreBox = document.createElement("div");
        scoreBox.innerHTML = "you did it! your score is " + finalScore + "%";
        document.getElementById("scoreContainer").appendChild(scoreBox);
        document.getElementById("quizTime").setAttribute("style", "display:none");
        quizOver();
        saveScoreBtn.addEventListener("click", function() {
            saveScoreArray = getLocal(saveScoreArray);
            var scoreBoard = {
                name: Name.value,
                score: finalScore,
            };
            saveScoreArray.push(scoreBoard);
            saveScoreArray = sortScore(saveScoreArray);
            for (var i = 0; i < saveScoreArray.length; i++) {
                var j = saveScoreArray[i];
                var newScoreLi = document.createElement("li");
                newScoreLi.textContent = "name: " + j.name + "  |  score: " + j.score;
                scoreContainer.appendChild(newScoreLi);
            }
            localStorage.setItem("final score", JSON.stringify(saveScoreArray));
        });
    }
});

function nextQuestion() {
    i++; //increment our index by 1 so we can keep track of what question we are on
    if (i >= questionAnswerArray.question.length) {
        //if we run out of questions end the game
        quizOver(); //ends the game
    } else {
        //if we got more questions dont stop there keep on goin!!!!!
        showQuestions(i); //showQuestion handles showing textContent of current Index
    } //Curley bracket there are many like it but this one is mine

    return;
}

function quizOver() {
    document.querySelector(`#lastPage`).style.display = `block`;
    score = timeLeft;
    return;
}

var timeInterval = "";

function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            quizTimeHtml.innerHTML = timeLeft + " seconds ";
            timeLeft--;
        } else if (timeLeft === 1) {
            quizTimeHtml.innerHTML = timeLeft + " second ";
            timeLeft--;
        } else {
            quizTimeHtml.innerHTML = "0";
            clearInterval(timeInterval);
        }
    }, 1000);
}

function init() {
    quizReset.addEventListener(`click`, resetQuiz); //returns back to main screen to show start and instructions
    resetQuiz();

    return;
}

init();