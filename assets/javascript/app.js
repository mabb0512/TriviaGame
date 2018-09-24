$(document).ready(function() {

    var questions = {
        1: {
            q: "Which of these distances is the longest type of event?",
            choices: {
                a: "Olympic",
                b: "Sprint",
                c: "Mini",
                d: "Half Ironman"
            },  
            correctAnswer: function () {
                return this.choices.d;
            }
        },
        2: {
            q: "Which of the following sports is not usually included in the triathlon?",
            choices: {
                a: "Swimming",
                b: "Cycling",
                c: "Bungee jumping",
                d: "Running"
            },
            correctAnswer: function () {
                return this.choices.c;
            }
        },
        3: {
            q: "What is almost always the first event in a triathlon?",
            choices: {
                a: "Swimming",
                b: "Cycling",
                c: "Running",
                d: "Walking"
            },
            correctAnswer: function () {
                return this.choices.a;
            }
        },
        4: {
            q: "Which of the following carries a penalty in the bike course event?",
            choices: {
                a: "Drafting",
                b: "Blocking",
                c: "Not buckling the chin strap on your helmet",
                d: "All of these"
            },
            correctAnswer: function () {
                return this.choices.d;
            }
        },
        5: {
            q: "What are the distances for each of the three sections in the Olympic triathlon?",
            choices: {
                a: "2.5 km swim, 40 km cycle, 10 km run",
                b: "1.5 km swim, 40 km cycle, 10 km run",
                c: "1.5 km swim, 80 km cycle, 10 km run",
                d: "1.5 km swim, 40 km cycle, 20 km run"
            },
            correctAnswer: function () {
                return this.choices.b;
            }
        },
        6: {
            q: "What are the distances for each of the three sections in the Half ironman triathlon?",
            choices: {
                a: "1.9 km swim, 90 km cycle, 21.1 km run",
                b: "3.8 km swim, 180 km cycle, 42 km run",
                c: "1.5 km swim, 80 km cycle, 10 km run",
                d: "1.5 km swim, 80 km cycle, 10 km run"
            },
            correctAnswer: function () {
                return this.choices.a;
            }
        },
        7: {
            q: "What is the term T1?",
            choices: {
                a: "swim/bike transition",
                b: "run/swim transition",
                c: "run/bike trnasition",
                d: "bike/run transition"
            },
            correctAnswer: function () {
                return this.choices.a;
            }
        },
        8: {
            q: "In which U.S. state is the full Ironman championship usually held in?",
            choices: {
                a: "Florida",
                b: "Hawaii ",
                c: "Texas",
                d: "California"
            },
            correctAnswer: function () {
                return this.choices.b;
            }
        },
        9: {
            q: "What is the term T2?",
            choices: {
                a: "swim/bike transition",
                b: "run/swim transition",
                c: "run/bike trnasition",
                d: "bike/run transition"
            },
            correctAnswer: function () {
                return this.choices.d;
            }
        },
        10: {
            q: "What distance do triathletes run in an Ironman?",
            choices: {
                a: "Marathon (42Km)",
                b: "Half marathon (21Km)",
                c: "10km",
                d: "20km"
            },
            correctAnswer: function () {
                return this.choices.a;
            }
        }
    }

    var timeToAnswer = 30;
    var chosenQuestion = 1;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var timerId = 0;
    var isCorrect = false;

    $('.option').hover(function(){$(this).toggleClass('option_hover');});

    function countdown() {

        var divTime = $('#time');
        var divMessage = $('#message');
        var divCorrecAnswer = $('#correct-answer');

        if (timeToAnswer == 0) {
            
            unanswered = unanswered + 1;
            clearTimeout(timerId);
            divTime.find('h3').text("Time Remaining: " + 0);
            divTime.show();
            divMessage.find('h3').text("Time is up!");
            divMessage.show();
            divCorrecAnswer.find('h3').text("The correct answer was: " + questions[chosenQuestion].correctAnswer());
            divCorrecAnswer.show();

            setTimeout(function() {

                divTime.hide();
                divMessage.hide();
                divCorrecAnswer.hide();
                $('#question').hide();
                $('#choices').hide();

                chosenQuestion = chosenQuestion + 1;

            }, 5000);

        } else {
            
            divTime.show();
            divTime.find('h3').text("Time Remaining: " + timeToAnswer);
            timeToAnswer = timeToAnswer - 1;
        }
    }

    function getQuestion () {
        
        if (chosenQuestion > 10) {

            clearTimeout(timerId);
            $('#question').hide();
            $('#choices').hide();
            
            gameOver();
        }
            
        else {

            $('#question').find('h3').text(questions[chosenQuestion].q);
            $('#question').show();
            getOptions();

        }    
    } 

    function getOptions () {

        $('#a').find('h3').text(questions[chosenQuestion].choices.a);
        $('#b').find('h3').text(questions[chosenQuestion].choices.b);
        $('#c').find('h3').text(questions[chosenQuestion].choices.c);
        $('#d').find('h3').text(questions[chosenQuestion].choices.d);
        
        $('#choices').show();
        $('#game').show();
    }

    function setQuestion () {

        $('#message').hide();
        $('#correct-answer').hide();
        timeToAnswer = 30;
        timerId = setInterval(countdown, 1000);
        setTimeout (function () {

            getQuestion();

        }, 1000);
    }

    function gameOver() {

        $('#time').hide();
        $('#message').show().find('h3').text("Done!");
        $('#correct-score').show().find('h2').text("Correct Answers: " + correctAnswers);
        $('#incorrect-score').show().find('h2').text("Incorrect Answers: " + incorrectAnswers);
        $('#unanswered-score').show().find('h2').text("Unanswered: " + unanswered);
        $('#scores').show();
        $('#start-again').show();
        $('#game').show();
    }

    function checkAnswer (option) {

        if (questions[chosenQuestion].choices[option] == questions[chosenQuestion].correctAnswer()) {

            correctAnswers = correctAnswers + 1;
            return true;
        }

        else {

            incorrectAnswers = incorrectAnswers + 1;
            return false;
        }
    }

    function restartGame () {

        timeToAnswer = 30;
        chosenQuestion = 1;
        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 0;
        timerId = 0;

        $('#start-again').hide();
        $('#message').hide();
        $('#scores').hide();
        $('#game').show();
    }

    $(document).on("click", "#start-again", function() {

        restartGame();
        setQuestion();
    });

    $(document).on("click", "#start", function() {

        $('#start').hide();
        setQuestion();
    });

    $('#choices div').click(function() {


        clearTimeout(timerId);
        var index = $('#choices div').index(this);
        var chosenAnswer = $('#choices').find('div').eq(index).attr('id');

        isCorrect = checkAnswer(chosenAnswer);

        if (isCorrect) {

            $('#message').show().find('h3').text("Correct!");
            $('#correct-answer').show().find('h3').text(questions[chosenQuestion].correctAnswer());
        }

        else {

            $('#message').show().find('h3').text("Incorrect!");
            $('#correct-answer').show().find('h3').text("The correct answer was: " + questions[chosenQuestion].correctAnswer());

        }

        setTimeout (function () {

            chosenQuestion = chosenQuestion + 1;
            $('#game').hide();
            setQuestion();

        }, 5000);

    });
});

