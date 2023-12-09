var score = 60;
var start = document.querySelector("#start");
var options = document.getElementById('options');
var timer = document.getElementById('time');

start.addEventListener("click", questionOne);

function questionOne() {
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
    
    option1.textContent = "numba one";
    option2.textContent = "numba one";
    option3.textContent = "numba one";
    option4.textContent = "numba one";

    option1.addEventListener("click", function() {
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :(';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
    });

    option2.addEventListener("click", function() {
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :(';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
    });

    option3.addEventListener("click", function() {
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Thats Correct :)';
        footer.setAttribute('class', 'right');
        score += 10;
        timer.textContent = 'Time: ' + score + ' seconds';
    });

    option4.addEventListener("click", function() {
        var footer = document.getElementById('footer');
        footer.appendChild(document.createElement('h3'));
        footer.textContent = 'Sorry, Wrong Answer :(';
        footer.setAttribute('class', 'wrong');
        score -= 10;
        timer.textContent = 'Time: ' + score + ' seconds';
    });



};