var joyLevel = 0;
var questionNumber = 5;
var pointsPerBestAnswer = 1;
var maxJoy = 15;
var happinessPercent = joyLevel / maxJoy * 100;

// Initializes
function init() {
    // Sets the correct answers
    sessionStorage.setItem('a1', 'c');
    sessionStorage.setItem('a2', 'a');
    sessionStorage.setItem('a3', 'b');
    sessionStorage.setItem('a4', 'd');
    sessionStorage.setItem('a5', 'c');
}

$(document).ready(function(){
    $('.question').hide(); // Hides all of the questions
    
    $('#q1').show(); // Shows the first question
    
    $('.question #submit').click(function(){
        //2:53
    });
    
    $('#q1 #submit').click(function() {
        $('.question').hide(); 
        answer('q1');
        $('#q2').fadeIn(500);
        return false;
    });
    
    $('#q2 #submit').click(function() {
        $('.question').hide(); 
        answer('q2');
        $('#q3').fadeIn(500);
        return false;
    });
    
    $('#q3 #submit').click(function() {
        $('.question').hide();
        answer('q3');
        $('#q4').fadeIn(500);
        return false;
    });
    
    $('#q4 #submit').click(function() {
        $('.question').hide(); 
        answer('q4');
        $('#q5').fadeIn(500);
        return false;
    });
    
    $('#q5 #submit').click(function() {
        $('.question').hide(); 
        answer('q5');
        $('#result').fadeIn(500);
        return false;
    });
    
});

//Processes the answers+questions
function answer(question) {
    if (question == "q1") { // Question 1
        var submitted = $('input[name=q1]:checked').val();
        if (submitted == "b") {
            joyLevel++;
        } else if (submitted == "c") {
            joyLevel = joyLevel + 2;
        } else if (submitted == "d") {
            joyLevel = joyLevel+ 3;
        }
    }
    if (question == "q2") { // Question 2
        var submitted = $('input[name=q2]:checked').val();
        if (submitted == "b") {
            joyLevel++;
        } else if (submitted == "c") {
            joyLevel = joyLevel + 2;
        } else if (submitted == "d") {
            joyLevel = joyLevel+ 3;
        }
    }
    if (question == "q3") { // Question 3
        var submitted = $('input[name=q3]:checked').val();
       if (submitted == "b") {
            joyLevel++;
        } else if (submitted == "c") {
            joyLevel = joyLevel + 2;
        } else if (submitted == "d") {
            joyLevel = joyLevel+ 3;
        }
    }
    if (question == "q4") { // Question 4
        var submitted = $('input[name=q4]:checked').val();
        if (submitted == "b") {
            joyLevel++;
        } else if (submitted == "c") {
            joyLevel = joyLevel + 2;
        } else if (submitted == "d") {
            joyLevel = joyLevel+ 3;
        }
    }
    if (question == "q5") { // Question 5
        var submitted = $('input[name=q5]:checked').val();
        if (submitted == "b") {
            joyLevel++;
        } else if (submitted == "c") {
            joyLevel = joyLevel + 2;
        } else if (submitted == "d") {
            joyLevel = joyLevel+ 3;
        }
        var happinessPercent = Math.round(joyLevel / maxJoy * 100);
        if (happinessPercent <= 25) {
            $('#result').html('<h3>Your Happiness Level is: '+ happinessPercent +'%</h3><br>You are are just and overall very unhappy person. <br><a href="happiness-calculator.html">Click Here to Take The Test Again!</a>');
        } else if (happinessPercent >= 26 && happinessPercent <= 50) {
            $('#result').html('<h3>Your Happiness Level is: '+ happinessPercent +'%</h3><br>You are usually sad but you sometimes have some happiness thrown into you. :| <br><a href="happiness-calculator.html">Click Here to Take The Test Again!</a>');
        } else if (happinessPercent >= 51 && happinessPercent <= 75) {
            $('#result').html('<h3>Your Happiness Level is: '+ happinessPercent +'%</h3><br>You are an overall happy person that has some ups and downs. :) <br><a href="happiness-calculator.html">Click Here to Take The Test Again!</a>');
        } else if (happinessPercent >= 76) {
            $('#result').html('<h3>Your Happiness Level is: '+ happinessPercent +'%</h3><br>You are always happy. Some say you are too happy. XD <br><a href="happiness-calculator.html">Click Here to Take The Test Again!</a>');
        }
        /*
        $('#result').html('<h3>Your Happiness Level is: '+ happinessPercent +'%</h3><br><h4>What the result means:</h4><ul><li><strong>Percent is 0% - 25%:</strong> You are are just and overall very unhappey person. :(</li><li><strong>Percent is 26% - 50%:</strong> You are usually sad but you sometimes have some happiness thrown into you. :|</li><li><strong>Percent is 51% - 75%:</strong> You are an overall happy person that has some ups and downs. :)</li><li><strong>Percent is 76% - 100%: </strong>You are always happy. Some say you are too happy. XD</li></ul><br><a href="happiness-calculator.html">Click Here to Take The Test Again!</a>'); */
    }
}

//Adds Event Listener
window.addEventListener('load', init, false);