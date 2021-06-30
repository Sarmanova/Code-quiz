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
var quizSubmit = document.querySelector("#quizSubmit");
var submitScoreBtn = document.querySelector("#submitScoreBtn");
var quizScore = document.querySelector("quizScore");
var quizReset = document.querySelector("quizReset");

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
var timeLeft = 40;
var i = 0;
var score = 0;

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
    questionAnswerArray[3].answersA,
];
//when I click the start button
document.querySelector(`#quizAnswers`).style.display = `none`;
document.querySelector(`#quizSubmit`).style.display = `none`;
document.querySelector(`#scoreContainer`).style.display = `none`;
p.setAttribute("style", "display:none");
pressStartHtml.addEventListener("click", function() {
    quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
    console.log(questionAnswerArray[i]);
    oneHtml.innerHTML = questionAnswerArray[i].answersA;
    twoHtml.innerHTML = questionAnswerArray[i].answersB;
    threeHtml.innerHTML = questionAnswerArray[i].answersC;
    fourHtml.innerHTML = questionAnswerArray[i].answersD;
    countdown();
    document.querySelector(`#quizAnswers`).style.display = "block";
});

quizAnswers.addEventListener("click", function(event) {
    var targetHtmlElement = event.target;
    if (
        (targetHtmlElement.matches("#fourHtml") &&
            fourHtml.innerHTML == correctAnswerArray[0]) ||
        (targetHtmlElement.matches("#twoHtml") &&
            twoHtml.innerHTML == correctAnswerArray[1]) ||
        (targetHtmlElement.matches("#oneHtml") &&
            oneHtml.innerHTML == correctAnswerArray[2]) ||
        (targetHtmlElement.matches("#threeHtml") &&
            threeHtml.innerHTML == correctAnswerArray[3])
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
    }
});
console.log(finalScore + " score after answering");

function nextQuestion() {
    i++; //increment our index by 1 so we can keep track of what question we are on
    if (i >= questionAnswerArray.question.length) {
        //if we run out of questions end the game
        quizOver(); //ends the game
    } else {
        //if we got more questions dont stop there keep on goin!!!!!
        showQuestions(i); //showQuestion handles showing textContent of current Index
    } //this is a curley bracket there are many like it but this one is mine

    return;
}

function quizOver() {
    document.querySelector(`#scoreSpan`).textContent = score;
    document.querySelector(`#quizSubmit`).style.display = `block`;
    document.querySelector(`#quizReset`).style.display = `block`;
    document.querySelector(`#pressStart`).style.display = `none`;
    score = timeLeft;
    return;
}

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