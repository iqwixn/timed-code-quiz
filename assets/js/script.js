var startButton = document.getElementById('start-btn')
var startTimer = document.getElementById('start-btn')
var questions = document.getElementById('question')

startTimer.addEventListener('click', timerStart)
startButton.addEventListener('click', startQuiz)

var secondsLeft = 60
var timer = document.querySelector('.timer');


function timerStart() {  
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft ;
      if(secondsLeft === 0) {       
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
    
    


}



function startQuiz() {
    startButton.classList.add('hide')
    options.classList.remove('hide')

}


