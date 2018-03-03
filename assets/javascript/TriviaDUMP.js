$('#startScreen').on('click', function askQ() {
        $(this).hide();

    });

    $('button#bertern').on('click', 'button', function (e) {
        let userAnswer = $('button#bertern span#answ').data("id"),
            index = _f.millionareQuestions[_f.questionNum].content,
            correct = _f.millionareQuestions[_f.questionNum].correct;

        if (userAnswer !== index) {
            $('#choices_div').text("Wrong Answer! The correct answer was: " + correct);
            answerCorrect(false);

        } else {
            $('#choices_div').text("Correct!!! The correct answer was: " + correct);
            answerCorrect(true);

        }

    });