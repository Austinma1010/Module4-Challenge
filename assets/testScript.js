var score = 60;
var start = document.querySelector("#start");
var options = document.getElementById('options');
var timer = document.getElementById('time');
var scores = localStorage.getItem('scores');
var scoreList = document.getElementById("highScoreList");
var scoreArray = JSON.parse(localStorage.getItem("savedScores")) || [];
var backBtn = document.getElementById('back');
var next;
scoreList.addEventListener("click", highScores); // button to view the high score
start.addEventListener("click", questionOne); // button to start the quiz



function checkAnswer() {
    
    console.log(this.textContent);
    if (this.classList.contains('correctAnswer')) {
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('button'));
        footer.textContent = 'Thats Correct :) Click this to continue';
        footer.setAttribute('class', 'right');
        return next = true;
       
        
    }
    else {
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        return next = true;
        
    }
}


function questionOne() { // Shows questions one
    next = false;
    countDown = setInterval(function() {
        score = score - 1;
        timer.textContent = 'Time: ' + score + ' seconds';
    }, 1000);
    document.getElementById("text").style.display = 'none'; // removes starting text
    document.getElementById("start").style.display = 'none'; // removes starting text
    document.getElementById("question").textContent = "Which is NOT a commonly used data type?"; // displays question
    var option1 = options.appendChild(document.createElement("li"));
    var option2 = options.appendChild(document.createElement("li"));
    var option3 = options.appendChild(document.createElement("li"));
    var option4 = options.appendChild(document.createElement("li")); //creates list items to store answers
    option1.setAttribute('class', 'wrongAnswer');
    option2.setAttribute('class', 'wrongAnswer');
    option3.setAttribute('class', 'correctAnswer');
    option4.setAttribute('class', 'wrongAnswer'); // adds styling to answers
    
    
    option1.textContent = "Booleans";
    option2.textContent = "Strings";
    option3.textContent = "Prompts";
    option4.textContent = "Numbers"; // sets text for answers

    option1.addEventListener("click", checkAnswer);
    option2.addEventListener("click", checkAnswer);
    option3.addEventListener("click", checkAnswer);
    option4.addEventListener("click", checkAnswer);

    if (next = true) {
        var footer = document.getElementById('footer');
        footer.addEventListener("click", questionTwo);
    }

};

function questionTwo() { // Shows questions two 
    var footer = document.getElementById('footer');
    footer.classList.remove('wrong');
    footer.classList.remove('right');
    next = false;
    var footer = document.getElementById('footer').textContent='';
    document.getElementById("question").textContent = "Which of the following is a string?";
    options.innerHTML = '';
    var option1 = options.appendChild(document.createElement("li"));
    var option2 = options.appendChild(document.createElement("li"));
    var option3 = options.appendChild(document.createElement("li"));
    var option4 = options.appendChild(document.createElement("li"));
    option1.setAttribute('class', 'correctAnswer');
    option2.setAttribute('class', 'wrongAnswer');
    option3.setAttribute('class', 'wrongAnswer');
    option4.setAttribute('class', 'wrongAnswer');
    
    
    option1.textContent = "'hello World!'";
    option2.textContent = "[hello world]";
    option3.textContent = "27";
    option4.textContent = "{hello World!}";

    option1.addEventListener("click", checkAnswer);
    option2.addEventListener("click", checkAnswer);
    option3.addEventListener("click", checkAnswer);
    option4.addEventListener("click", checkAnswer);

    if (next = true) {
        var footer = document.getElementById('footer');
        footer.addEventListener("click", questionThree);
       
    }

};

function questionThree() { // Shows questions three
    
    var footer = document.getElementById('footer');
    footer.classList.remove('wrong');
    footer.classList.remove('right');
    next = false;
    var footer = document.getElementById('footer').textContent='';
    document.getElementById("question").textContent = "Which of the following is a boolean?";
    options.innerHTML = '';
    var option1 = options.appendChild(document.createElement("li"));
    var option2 = options.appendChild(document.createElement("li"));
    var option3 = options.appendChild(document.createElement("li"));
    var option4 = options.appendChild(document.createElement("li"));
    option1.setAttribute('class', 'wrongAnswer');
    option2.setAttribute('class', 'correctAnswer');
    option3.setAttribute('class', 'wrongAnswer');
    option4.setAttribute('class', 'wrongAnswer');
    
    
    option1.textContent = "'hello'";
    option2.textContent = "true";
    option3.textContent = "27";
    option4.textContent = "28.25";

    option1.addEventListener("click", checkAnswer);
    option2.addEventListener("click", checkAnswer);
    option3.addEventListener("click", checkAnswer);
    option4.addEventListener("click", checkAnswer);

    if (next = true) {
        var footer = document.getElementById('footer');
        footer.addEventListener("click", questionFour);
        footer.style.display = 'block';
    }

};

function questionFour() { // Shows questions four
    var footer = document.getElementById('footer');
    footer.classList.remove('wrong');
    footer.classList.remove('right');
    next = false;
    var footer = document.getElementById('footer').textContent='';
    document.getElementById("question").textContent = "What does the 'H' in 'HTML stand for?";
    options.innerHTML = '';
    var option1 = options.appendChild(document.createElement("li"));
    var option2 = options.appendChild(document.createElement("li"));
    var option3 = options.appendChild(document.createElement("li"));
    var option4 = options.appendChild(document.createElement("li"));
    option1.setAttribute('class', 'wrongAnswer');
    option2.setAttribute('class', 'wrongAnswer');
    option3.setAttribute('class', 'wrongAnswer');
    option4.setAttribute('class', 'correctAnswer');
    
    
    option1.textContent = "hello";
    option2.textContent = "Hippies";
    option3.textContent = "Hemp";
    option4.textContent = "Hypertext";

    option1.addEventListener("click", checkAnswer);
    option2.addEventListener("click", checkAnswer);
    option3.addEventListener("click", checkAnswer);
    option4.addEventListener("click", checkAnswer);

    if (next = true) {
        var footer = document.getElementById('footer');
        footer.addEventListener("click", questionFive);
    }

};

function questionFive() { // Shows questions five
    next = false;
    var footer = document.getElementById('footer');
    footer.classList.remove('wrong');
    footer.classList.remove('right');
    var footer = document.getElementById('footer').textContent='';
    document.getElementById("question").textContent = "Which of the following is an array?";
    options.innerHTML = '';
    var option1 = options.appendChild(document.createElement("li"));
    var option2 = options.appendChild(document.createElement("li"));
    var option3 = options.appendChild(document.createElement("li"));
    var option4 = options.appendChild(document.createElement("li"));
    option1.setAttribute('class', 'wrongAnswer');
    option2.setAttribute('class', 'wrongAnswer');
    option3.setAttribute('class', 'wrongAnswer');
    option4.setAttribute('class', 'correctAnswer');
    
    
    option1.textContent = "{hello, goodbye}";
    option2.textContent = "(hello, goodbye)";
    option3.textContent = "hello, goodbye";
    option4.textContent = "[hello, goodbye]";

    option1.addEventListener("click", checkAnswer);
    option2.addEventListener("click", checkAnswer);
    option3.addEventListener("click", checkAnswer);
    option4.addEventListener("click", checkAnswer);

    if (next = true) {
        var footer = document.getElementById('footer');
        footer.addEventListener("click", showScore);
        var clearInt = clearInterval(countDown);
    }



};

function saveScoreButton() {
    document.body.children[1].innerHTML = '';
    document.body.children[2].innerHTML = '';
    var initials = document.body.children[1].appendChild(document.createElement('h2'));
    initials.textContent = 'Enter Intitials';
    var initialsInput = document.body.children[1].appendChild(document.createElement('input'));
    var saveBtn = document.body.children[1].appendChild(document.createElement('h2'));
    saveBtn.textContent = "Save!";
    saveBtn.addEventListener('click', function() {
        saveScore(initialsInput.value);

    })
}

function saveScore(x) {
    var scoreString = x + " - " + score;
    scoreArray.push(scoreString);
    localStorage.setItem('savedScores', JSON.stringify(scoreArray));
    highScores();

}

function showScore() { // Shows your score
    document.body.children[1].innerHTML = '';
    document.body.children[2].innerHTML = ''; // clears previous text
    yourScore = document.body.children[1].appendChild(document.createElement('h1'));
    yourScore.textContent = "Your Score is: " + score + "/5";
    yourScore.setAttribute('class', 'score');
    var restart = document.body.children[1].appendChild(document.createElement('button')); // creates retry button
    var saveScoreBtn = document.body.children[1].appendChild(document.createElement('button'));
    saveScoreBtn.textContent = 'Save Score'
    restart.textContent = "Retry";
    restart.addEventListener("click", retry); // adds functionality to retry button
    localStorage.setItem('scores', score); // adds your score to local storage
    saveScoreBtn.addEventListener('click', saveScoreButton);
}

function highScores() { //Shows highscore 
    scoreList.style.display = "none";
    backBtn.style.display = 'block';
    backBtn.addEventListener('click', retry);
    

    document.body.children[1].innerHTML = '';
    document.body.children[2].innerHTML = ''; // clears text from previous question
    var showHighScore = document.body.children[1].appendChild(document.createElement('h1')); // creates h1
    var allScoresDiv = document.body.appendChild(document.createElement('div'));
    allScoresDiv.setAttribute('class','main');
    var allScores = allScoresDiv.appendChild(document.createElement('h1'));
    var highScores = allScoresDiv.appendChild(document.createElement('ul'));
    
    allScores.textContent = 'Saved Scores';
    
    showHighScore.setAttribute('class', 'score'); // styles h1
    
    var topScore = 0;
    var topScorer;
    for (var i = 0; i < scoreArray.length; i++) {
        var splitArray = [];
        splitArray.push(scoreArray[i]);
        var splitIn = splitArray[0].slice(0, 2);
        var splitScore = splitArray[0].slice(5, 8);
        console.log(splitScore);
        var highScoresList = highScores.appendChild(document.createElement('li'));
        highScoresList.textContent = scoreArray[i];

        if (Number(splitScore) > topScore) {
            topScore = splitScore;
            topScorer = splitIn;
        }

    }
    showHighScore.textContent = 'The Highest score is ' + topScore + ' and belongs to ' + topScorer + "!"; 

    

    
}

function retry() { //reloads page
    location.reload();
    scoreList.style.display = "block";
    backBtn.style.display = 'none';
}