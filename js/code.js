$(document).ready(function(){

	//when h2 is clicked
	$("h2").click(function(){
		//store var for sibline p tag
		var graf = $(this).next();
		//slide in/out graf
		graf.slideToggle("slow");

		//change class, remove triangle pseudo-class
		$(this).toggleClass('no-after');

		//bring all other grafs up except sibline p tag and also intro p tag
		$("p").not(graf).not(".intro").slideUp("slow");

		$("h2").not(this).removeClass("no-after");

	});

});


