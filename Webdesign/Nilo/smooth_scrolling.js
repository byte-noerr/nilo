
	$(".scrolling a").click(function(event){														//Select Links in Navigation and bind click to them
		
		var navLink = $(this).attr("href");															//Take hreft attribute of .scrolling and store it in variable navLink
		
		$("body").animate({scrollTop: $(navLink).offset().top}, "slow");						//Select body and use animate method. Animate takes two infos: Options for the animations and speed. 
		
		event.preventDefault();									
		
	});



//scrollTop tells the selected element (body) to scroll 