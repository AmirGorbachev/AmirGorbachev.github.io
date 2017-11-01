$(document).ready(function(){
	    $(".scrollScript").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	           	top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 750);
	    });
	});

$(document).ready(function(){
	var numberOfImages = 5, // Количество изображений
		displayTime = 7000, // Время отображения слайда
		displayTimeOfAllItems; // Время отображения всех слайдов

	displayTimeOfAllItems = numberOfImages * displayTime;

	sliderAnim();
	setInterval(sliderAnim, displayTimeOfAllItems);

	function sliderAnim() {
		var i = 1; // счётчик длины таймера
		setTimeout(slider1, displayTime * i++);
		setTimeout(slider2, displayTime * i++);
		setTimeout(slider3, displayTime * i++);
		setTimeout(slider4, displayTime * i++);
		setTimeout(slider5, displayTime * i++);
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

