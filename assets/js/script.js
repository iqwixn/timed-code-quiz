var startButton = document.getElementById('start-btn');
var startTimer = document.getElementById('start-btn');
var startQuestions = document.getElementById('questions');
var showScore = document.getElementById('showscore');

var choiceA = document.getElementById("choice1");
var choiceB = document.getElementById("choice2");
var choiceC = document.getElementById("choice3");
var choiceD = document.getElementById("choice4");

startTimer.addEventListener('click', timerStart);
startButton.addEventListener('click', startQuiz);
var score = 0;
var secondsLeft = 60;
var currentQuestionNumber = 0;
var finalScore;
var correctAnswer;
var totalQuestions = 5;
var finalQuestion 
var timer = document.querySelector('#timer');

var questions = [
    {
        question : "What is the capital of California?",
            
            a: "San Diego",
            b: "Los Angeles",
            c: "Sacramento",
            d: "San Francisco",
            trueAnswer: "choice3"
        
    },
    {
        question : "Which of these birds cannot fly?",

            a: "Goose",
            b: "Ostrich",
            c: "Eagle",
            d: "Flamingo",
            trueAnswer: "choice2"
        


    },
    {
        question : "When is the next leap year?",
            a: "2024",
            b: "2025",
            c: "2026",
            d: "2027",
            trueAnswer: "choice1"
       


    },
    {
        question : "Which of these is a secondary color?",
            a: "Red",
            b: "Blue",
            c: "Green",
            d: "Orange",
            trueAnswer: "choice4"
    
       

    },
    {
        question : "What is the first derivative of 3x^2 + 2" ,
            a: "3",
            b: "6x",
            c: "6x + C",
            d: "3x + C",
            trueAnswer: "choice2"
    
       

    },
        
];






function timerStart() {  
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time left:" + secondsLeft ;
      if(secondsLeft === 0) {
        alert("Game Over!")       
        clearInterval(timerInterval);
        
        
      }
    }, 1000);

}

function generateQuestion() {
    var currentQuestion = questions[currentQuestionNumber];
    startQuestions.innerHTML = "<p>" + currentQuestion.question + "</p>";
    choiceA.innerHTML = "A: " + currentQuestion.a;
    choiceB.innerHTML = "B: " + currentQuestion.b;
    choiceC.innerHTML = "C: " + currentQuestion.c;
    choiceD.innerHTML = "D: " + currentQuestion.d;

};

function checkAnswer(answer) {
    correctAnswer = questions[currentQuestionNumber].trueAnswer;
    if (answer === correctAnswer ){
        currentQuestionNumber++;
        generateQuestion();
    }
    if (answer != correctAnswer){
        secondsLeft = secondsLeft - 5;

    
    }
    if (currentQuestionNumber == questions.length) {
        clearInterval(timerInterval);
        gameOver();
    }    
   

}

function startQuiz() {
    generateQuestion();
    startButton.classList.add('hide')
    quizBox.classList.remove('hide')
    startQuestions.classList.remove('hide')
    
    

}

function restartQuiz() {
    confirm("Would you like to play again?")
    
    }

    


function endScore() {
    score = secondsLeft;
    showScore.innerHTML = "Current score is: " + score;
    

}

function gameOver(){
    timer.textContent = 0;
    finalScore = score;
    showScore.textContent = finalScore;    
}