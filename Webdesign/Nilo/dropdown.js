$(document).ready(function(){

	$('.menu').on('click', function(){
		$('.main-navigation').toggleClass('open');
		$('.main-navigation li').toggleClass('transparent');
	});

});


// Whenever you click on .menu the ul within it receives the class open or is taken 
// away that class if it already has it


//bei default hat ul eine height von 0; die class open gibt der ul dann eine height von auto