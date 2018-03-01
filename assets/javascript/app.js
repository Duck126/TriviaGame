$.fn.trivia = function () {
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
            content: ["Cow","Pig","Fox","Teenager"],
            correct: 1
        },
        {
            question: "The EPA urges people to produce less waste by engaging in efforts to reduce, reuse and what?",
            content: ["Recycle","Rewrap","Repossess","Retire"],
            correct: 0
        },
        {
            question: "What is the second most common gas in the air?",
            content: ["Nitrogen","Oxygen","Water","Helium"],
            correct: 1
        },
        {
            question: "Which month has only 28 days (unless it's a leap year)?",
            content: ["March","September","June","Feburary"],
            correct: 3
        },
        {
            correct: 1,
            content: ["give","prove","both","None of the above"],
            question: "Pythagoras was first to ____ the universal validity of geometrical theorem."
        },
        {
            correct: 0,
            content: ["George Washington","Bill Clinton","George Bush","None of the above"],
            question: "The American General who led the revolt against the British and declared American independence was"
        },
        {
            correct: 0,
            content: ["1986 at Athens","1988 at Seoul","1924 at St. Louis","1908 at London"
            ],
            question: "When and where was weightlifting introduced in Olympics?"
        },
        {
            correct: 1,
            content: ["Junagarh, Gujarat","Diphu, Assam","Kohima, Nagaland","Gangtok, Sikkim"],
            question: "Garampani sanctuary is located at"
        },
        {
            correct: 3,
            content: ["states that no one was to be imprisoned without a writ or warrant stating the charge against him","provided facilities to a prisoner to obtain either speedy trial or release in bail","safeguarded the personal liberties of the people against arbitrary imprisonment by the king's orders","All of the above"],
            question: "The Habeas Corpus Act of 1679"
        },
        {
            correct: 1,
            content: ["1960","1961","1962","1963"],
            question: "When did Yuri Alekseyevich Gagaris of Russia, the first man to reach space, reach space?"
        },
        {
            question: "What are the dimensions of A4 paper?",
            content: ["8.3\" x 11.7\"","8.5\" x 11\"","30cm x 50cm","8.5\" x 14\""
            ],
            correct: 0
        },
        {
            correct: 2,
            content: ["energy","speed","distance","intensity"],
            question: "Light Year is related to"
        },
        {
            correct: 2,
            content: ["a type of asset that is in cash in the current account of the commercial bank","a type of asset that is in the form of a deposit in the current account of the commercial bank","either of these","None of the above"],
            question: "A liquid asset is"
        },
        {
            correct: 1,
            content: ["largest airport", "highest airport","lowest airport","busiest airport"],
            question: "Lhasa airport at Tibet is the World's"
        },
        {
            correct: 2,
            content: ["Ethiopia","Nigeria","Zambia","Chad"],
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
            if (_f.buttonsArray[ind] == answerArray[i]) {
                var button = $('<button type="button" class="btn btn-outline-success">');
                button.text(answerArray[i]);
                button.sttr('data-id', i);
                $('#choices').append(button);
            }
         
                answerA.html(answerArray[i]);
            $('#answerA').append(answerA);
        }
    }

};

askQ();
console.log(answerArray[i]);
};            