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
	setInterval(sliderAnim, 35000);

	function sliderAnim() {
		setTimeout(slider1, 7000);
		setTimeout(slider2, 14000);
		setTimeout(slider3, 21000);
		setTimeout(slider4, 28000)
		setTimeout(slider5, 35000);
	}

	function slider1() {
		$('.image-background-for-header5').fadeOut("normal");
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
	function slider4() {
		$('.image-background-for-header3').fadeOut("normal");
		$('.image-background-for-header4').fadeIn("normal");
	}
	function slider5() {
		$('.image-background-for-header4').fadeOut("normal");
		$('.image-background-for-header5').fadeIn("normal");
	}
});

