$(document).ready(function () {
    var _f = this;

    _f.userAnswer = null;

    _f.answers = {
        correct: 0,
        incorrect: 0
    };

    _f.questionNum = 0;

    _f.time = 30;

    _f.buttonsArray = ["answerA", "answerB", "answerC", "answerD"];

    _f.millionareQuestions = [
        {
            question: "What kind of animal traditionally lives in a sty?",
            content: ["Cow", "Pig", "Fox", "Teenager"],
            correctA: 1
        },
        {
            question: "The EPA urges people to produce less waste by engaging in efforts to reduce, reuse and what?",
            content: ["Recycle", "Rewrap", "Repossess", "Retire"],
            correctA: 0
        },
        {
            question: "What is the second most common gas in the air?",
            content: ["Nitrogen", "Oxygen", "Water", "Helium"],
            correctA: 1
        },
        {
            question: "Which month has only 28 days (unless it's a leap year)?",
            content: ["March", "September", "June", "Feburary"],
            correctA: 3
        },
        {
            correctA: 1,
            content: ["give", "prove", "both", "None of the above"],
            question: "Pythagoras was first to ____ the universal validity of geometrical theorem."
        },
        {
            correctA: 0,
            content: ["George Washington", "Bill Clinton", "George Bush", "None of the above"],
            question: "The American General who led the revolt against the British and declared American independence was"
        },
        {
            correctA: 0,
            content: ["1986 at Athens", "1988 at Seoul", "1924 at St. Louis", "1908 at London"
            ],
            question: "When and where was weightlifting introduced in Olympics?"
        },
        {
            correctA: 1,
            content: ["Junagarh, Gujarat", "Diphu, Assam", "Kohima, Nagaland", "Gangtok, Sikkim"],
            question: "Garampani sanctuary is located at"
        },
        {
            correctA: 3,
            content: ["states that no one was to be imprisoned without a writ or warrant stating the charge against him", "provided facilities to a prisoner to obtain either speedy trial or release in bail", "safeguarded the personal liberties of the people against arbitrary imprisonment by the king's orders", "All of the above"],
            question: "The Habeas Corpus Act of 1679"
        },
        {
            correctA: 1,
            content: ["1960", "1961", "1962", "1963"],
            question: "When did Yuri Alekseyevich Gagaris of Russia, the first man to reach space, reach space?"
        },
        {
            question: "What are the dimensions of A4 paper?",
            content: ["8.3\" x 11.7\"", "8.5\" x 11\"", "30cm x 50cm", "8.5\" x 14\""],
            correctA: 0
        },
        {
            correctA: 2,
            content: ["energy", "speed", "distance", "intensity"],
            question: "Light Year is related to"
        },
        {
            correctA: 2,
            content: ["a type of asset that is in cash in the current account of the commercial bank", "a type of asset that is in the form of a deposit in the current account of the commercial bank", "either of these", "None of the above"],
            question: "A liquid asset is"
        },
        {
            correctA: 1,
            content: ["largest airport", "highest airport", "lowest airport", "busiest airport"],
            question: "Lhasa airport at Tibet is the World's"
        },
        {
            correctA: 2,
            content: ["Ethiopia", "Nigeria", "Zambia", "Chad"],
            question: "Which of these African countries is situated south of the equator?"
        }
    ];


    var answerArray = $(_f.millionareQuestions[0].content);

    _f.askQ = function () {

        if (_f.millionareQuestions[_f.questionNum]) {
            $("#timer").html("Time remaining: " + "00:" + _f.time + "secs");
            $("#questionDiv").html(_f.millionareQuestions[_f.questionNum].question);
            var answerArray = _f.millionareQuestions[_f.questionNum].content;
            var buttonsArray = [];

            for (let i = 0; i < answerArray.length; i++) {
                console.log(answerArray[i]);
                $("#answ" + i).text(answerArray[i]);
            }
        };

    };

    _f.timer1 = function () {
        _f.time--;
        if (_f.time <= 0) {
            setTimeout(function () {
                _f.nextQ();
            });
        } else {
            $("#timer").html("Time remaining: " + "00:" + + _f.time + " secs");
        };
        console.log(_f.time);
    };

    _f.nextQ = function () {
        _f.questionNum++;
        clearInterval(window.timer1);
        _f.time = 30;
        $('#timer').html("Time remaining: " + "00: " + + _f.time + " secs");
        setTimeout(function () {
            _f.askQ();
        }, 30000)
        console.log(setTimeout(_f.time));
    };

    _f.answerCorrect = function (correct) {
        var str = correct ? 'correct' : 'incorrect';
        _f.answers[str]++;
        $('.' + str).html(str + ' answers: ' + _f.answers[str]);

};



/*$('#startScreen').on('click', function askQ() {
        $(this).hide();

    });*/
_f.askQ();
_f.timer1();
_f.nextQ();
_f.answerCorrect();
$('button#bertern').on('click', '#bertern', function (e) {
    let userAnswer = $('button#bertern span#answ').data("id"),
        index = _f.millionareQuestions[_f.questionNum].content,
        correct = _f.millionareQuestions[_f.questionNum].correctA;

    if (userAnswer == index) {
        $('.card-header').text("Wrong Answer! The correct answer was: " + correct);
        answerCorrect(false);

    } else {
        $('.card-header').text("Correct!!! The correct answer was: " + correct);
        answerCorrect(true);

    }

    });




});





    




















