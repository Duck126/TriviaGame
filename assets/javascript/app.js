$(document).ready(function () {
   $get.("https://api.myjson.com/bins/1gf63p", function (question, content) {
        console.log(content);
        $.ajax({
            type: "JSON",
            url: "https://api.myjson.com/bins/1gf63p",
            data: content,
            dataType: "json",
            success: function (data) {
                $(".answerA").append('<div> ' + data.content['0'] + '</div><div>' + data.form.login + '</div><div>' + data.form.name + '</div>');
            }
        });
    });
});