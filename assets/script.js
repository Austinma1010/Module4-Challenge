var score = 60;
var start = document.querySelector("#start");
var options = document.getElementById('options');
var timer = document.getElementById('time');


start.addEventListener("click", questionOne);

function questionOne(event) {
    event.stopPropagation();
    document.getElementById("text").style.display = 'none';
    document.getElementById("start").style.display = 'none';
    document.getElementById("question").textContent = "Which is NOT a commonly used data type?";
    var option1 = options.appendChild(document.createElement("li"));
    var option2 = options.appendChild(document.createElement("li"));
    var option3 = options.appendChild(document.createElement("li"));
    var option4 = options.appendChild(document.createElement("li"));
    option1.setAttribute('class', 'button-style');
    option2.setAttribute('class', 'button-style');
    option3.setAttribute('class', 'button-style');
    option4.setAttribute('class', 'button-style');
    option1.setAttribute('id', 'button1');
    option2.setAttribute('id', 'button2');
    option3.setAttribute('id', 'button3');
    option4.setAttribute('id', 'button4');
    
    option1.textContent = "Booleans";
    option2.textContent = "Strings";
    option3.textContent = "Prompts";
    option4.textContent = "Numbers";

    option1.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionTwo);
    });

    option2.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionTwo);
    });

    option3.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('button'));
        footer.textContent = 'Thats Correct :) Click this to continue';
        footer.setAttribute('class', 'right');
        footer.addEventListener("click", questionTwo);
        
        
    });

    option4.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionTwo);
    });



};

function questionTwo(event) {
    event.stopPropagation();
    var footer = document.getElementById('footer').textContent='';
    document.getElementById("question").textContent = "Which of the following is a string?";
    var option1 = document.getElementById("button1");
    var option2 = document.getElementById("button2");
    var option3 = document.getElementById("button3");
    var option4 = document.getElementById("button4");
   
    
    option1.textContent = "'hello World!'";
    option2.textContent = "[hello world]";
    option3.textContent = "27";
    option4.textContent = "{hello World!}";

    option1.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Thats Correct :) Click this to continue';
        footer.setAttribute('class', 'right');
        footer.addEventListener("click", questionThree);
    });

    option2.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionThree);
    });

    option3.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionThree);
    });

    option4.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionThree);
    });



};

function questionThree(event) {
    event.stopPropagation();
    var footer = document.getElementById('footer').textContent='';
    document.getElementById("question").textContent = "Which of the following is a boolean?";
    var option1 = document.getElementById("button1");
    var option2 = document.getElementById("button2");
    var option3 = document.getElementById("button3");
    var option4 = document.getElementById("button4");
   
    
    option1.textContent = "'hello'";
    option2.textContent = "true";
    option3.textContent = "27";
    option4.textContent = "28.25";

    option1.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionFour);
        
        
    });

    option2.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Thats Correct :) Click this to continue';
        footer.setAttribute('class', 'right');
        footer.addEventListener("click", questionFour);
    });

    option3.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionFour);
    });

    option4.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionFour);
    });



};

function questionFour(event) {
    event.stopPropagation();
    var footer = document.getElementById('footer').textContent='';
    document.getElementById("question").textContent = "What does the 'H' in 'HTML stand for?";
    var option1 = document.getElementById("button1");
    var option2 = document.getElementById("button2");
    var option3 = document.getElementById("button3");
    var option4 = document.getElementById("button4");
   
    
    option1.textContent = "hello";
    option2.textContent = "Hippies";
    option3.textContent = "Hemp";
    option4.textContent = "Hypertext";

    option1.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionFive);
        
    });

    option2.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionFive);
    });

    option3.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to continue';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", questionFive);
    });

    option4.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Thats Correct :) Click this to continue';
        footer.setAttribute('class', 'right');
        footer.addEventListener("click", questionFive);
    });



};

function questionFive(event) {
    event.stopPropagation();
    var footer = document.getElementById('footer').textContent='';
    document.getElementById("question").textContent = "Which of the following is an array?";
    var option1 = document.getElementById("button1");
    var option2 = document.getElementById("button2");
    var option3 = document.getElementById("button3");
    var option4 = document.getElementById("button4");
   
    
    option1.textContent = "{hello, goodbye}";
    option2.textContent = "(hello, goodbye)";
    option3.textContent = "hello, goodbye";
    option4.textContent = "[hello, goodbye]";

    option1.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to view score';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", showScore);
        
        
    });

    option2.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to view score';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", showScore);
    });

    option3.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :( Click this to view score';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
        footer.addEventListener("click", showScore);
    });

    option4.addEventListener("click", function(event) {
        event.stopPropagation();
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Thats Correct :) Click this to view score';
        footer.setAttribute('class', 'right');
        footer.addEventListener("click", showScore);
        
    });



};

function showScore() {
    document.body.children[1].innerHTML = '';
    document.body.children[2].innerHTML = '';
    yourScore = document.body.appendChild(document.createElement('h1'));
    yourScore.textContent = "Your Score is: " + score;
}

function highScores() {
    document.body.children[1].innerHTML = '';
    document.body.children[2].innerHTML = '';
}