$(document).ready(function() {

    var questions = {
        q1: {
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
        q2: {
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
        q3: {
            q: "What is almost always the first event in a triathlon?",
            choices: {
                a: "Swimming",
                b: "Cycling",
                c: "Running"
            },
            correctAnswer: function () {
                return this.choices.a;
            }
        },
        q4: {
            q: "Which of the following carries a penalty in the bike course event?",
            choices: {
                a: "Drafting",
                b: "Blocking",
                c: "Not buckling the chin strap on your helmet",
                d: "All of these"
            },
            correctAnswer: function () {
                return this.choices;
            }
        },
        q5: {
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
        q6: {
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
        q7: {
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
        q8: {
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
        q9: {
            q: "",
            choices: {
                a: "",
                b: "",
                c: "",
                d: ""
            },
            correctAnswer: function () {
                return this.choices;
            }
        },
        q10: {
            q: "What distance do triathletes run in an Ironman?",
            choices: {
                a: "marathon",
                b: "half marathon",
                c: "10k",
                d: "20k"
            },
            correctAnswer: function () {
                return this.choices.a;
            }
        }
    }

    var timeToAnswer = 10;
    var chosenQuestion = "";
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var timerId = 0;

    function countdown() {

        if (timeToAnswer == 0) {
            
            clearTimeout(timerId);
            $('#time').find('h3').text("Time Remaining: " + 0);
            //doSomething();

        } else {
            
            var divTime = $('#time').find('h3');
            divTime.text("Time Remaining: " + timeToAnswer);
            timeToAnswer = timeToAnswer - 1;
        }
    }

    function getOptionDiv (id) {

        var div = $("#"+id).find('h3');
        return div;
    }

    function restartGame () {

        var timeToAnswer = 60;
        var chosenQuestion = "";
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var unanswered = 0;
        var timerId = 0;

        $('#start-again').hide();
    }

    //$('.option').hover(function(){$(this).toggleClass('option_hover');});

    /*$(document).on("click", "#start-again", function() {

    })*/

    $(document).on("click", "#start", function() {

        $('#start').hide();

        timerId = setInterval(countdown, 1000);



    })
});

