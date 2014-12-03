$(document).ready(function(){
	$("p").slideUp();
	//if the h2 element is clicked
	$("h2").click(function(){
		console.log("Event fired");
		
		var graf = $(this).next();

		$(this).toggleClass('no-after');

		graf.slideToggle("slow");

		$("p").not(graf).slideUp("slow");

	});

});


