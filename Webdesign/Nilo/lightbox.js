var $overlay = $('<div class="overlay"></div>');
var $image = $('<img class="nilo">');

$("html").append($overlay);
$overlay.append($image);

$(".lightbox a").click(function(event){
	
	event.preventDefault();
	
	var imageLocation = $(this).attr("href");		
	$image.attr("src", imageLocation);
	
	$overlay.show();
	
	$(".nilo").fadeIn( "slow" );
	
});

$overlay.click(function() {													
	$overlay.hide();	
});