$(document).ready(function(){
	    $(".scrollScript").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	           	top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 750);
	    });
	});

$(document).ready(function(){
	sliderAnim();
	setInterval(sliderAnim, 30000);

	function sliderAnim() {
		setTimeout(slider1, 10000);
		setTimeout(slider2, 10000);
		setTimeout(slider3, 10000);
	}

	function slider1() {
		$('.image-background-for-header3').fadeOut("normal");
		$('.image-background-for-header1').fadeIn("normal");
	}
	function slider2() {
		$('.image-background-for-header1').fadeOut("normal");
		$('.image-background-for-header2').fadeIn("normal");
	}
	function slider3() {
		$('.image-background-for-header2').fadeOut("normal");
		$('.image-background-for-header3').fadeIn("normal");
	}
});

