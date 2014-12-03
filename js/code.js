$(document).ready(function(){
	//if the h2 element is clicked
	$("h2").click(function(){
		console.log("Event fired");
		$(this).next().slideToggle("slow");
	});

});


