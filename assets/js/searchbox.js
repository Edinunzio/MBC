var searchBox = new function(){
	isActive = false;
	navbarForm = $('.navbar-form form');
	console.log(navbarForm);
	$('.navbar-form button').on('click', function() {
		alert('tb');
		if (isActive === false)
		{
			$(this).parent(navbarForm).addClass('active');
			isActive = true;
			$(this).parent(navbarForm ).find('input').focus();
			alert('t');
			return false;
		} else{
			$(this).parent(navbarForm).removeClass('active');
			isActive = false
			$('button.btn').blur();
			alert('t2');
			return false;
		}
	});
};