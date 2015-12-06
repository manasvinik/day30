window.onload = function () { 
	$('#feed').click(function(){
		$('.blob').css({ 'height' : '+=20px' });
		$('.blob').css({ 'width' : '+=20px' });
	});


	$('#poke').click(function(){
		$('.blob').css({ 'height' : '-=20px' });
		$('.blob').css({ 'width' : '-=20px' });
	});
}
