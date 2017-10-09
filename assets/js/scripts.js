$(document).ready(function(){
	    $(".scrollScript").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	           	top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 750);
	    });
	});
<<<<<<< HEAD
$(document).ready(function(){
    $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "GET", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
            });
    });
});
=======

>>>>>>> parent of 2877b83... JSforMail


