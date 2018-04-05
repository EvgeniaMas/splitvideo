$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			$('.close_menu').addClass('closed');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.close_menu', 'click', function(event){
			$('.open').removeClass('oppenned');
			$('.close_menu').removeClass('closed');
			event.stopPropagation();
		});
	});
