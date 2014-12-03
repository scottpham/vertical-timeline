$(document).ready(function(){
	//$("p").not(".intro").slideUp();
	//if the h2 element is clicked
	$("h2").click(function(){
		
		var graf = $(this).next();

		$(this).toggleClass('no-after');

		graf.slideToggle("slow");

		$("p").not(graf).not(".intro").slideUp("slow");

	});

});


