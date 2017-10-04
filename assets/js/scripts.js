$(".block-anim").fadeIn(1000);
$(document).ready(function(){
	    $(".scrollScript").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	           	top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 750);
	    });
	});



