// $(document).ready(function() {
// 		$(document).on('.open', 'click', function(event){
// 			$('.close_menu').addClass('close_visible');
// 			$(this).addClass('oppenned');

// 			event.stopPropagation();
// 		})
// 		$(document).on('body', 'click', function(event) {
// 			$('.open').removeClass('oppenned');
// 		})
// 		$(document).on('.close_visible', 'click', function(event){
// 			$('.open').removeClass('oppenned');
// 			$('.close_menu').removeClass('close_visible');
// 			event.stopPropagation();
// 		});
// 	});



$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			// $('.close_menu').addClass('close_visible');
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




// $(document).ready(function() {
// 		$(document).delegate('.open', 'click', function(event){
// 			$('.close_menu').addClass('close_visible');
// 			$(this).addClass('oppenned');

// 			event.stopPropagation();
// 		})
// 		$(document).delegate('body', 'click', function(event) {
// 			$('.open').removeClass('oppenned');
// 		})
// 		$(document).delegate('.close_menu', 'click', function(event){
// 			$('.open').removeClass('oppenned');
// 			$('.close_menu').removeClass('close_visible');
// 			event.stopPropagation();
// 		});
// 	});





// $(document).ready(function() {
// 		$(document).delegate('.open', 'click', function(event){
// 			$(this).addClass('oppenned');
// 			event.stopPropagation();
// 		})
// 		$(document).delegate('body', 'click', function(event) {
// 			$('.open').removeClass('oppenned');
// 		})
// 		$(document).delegate('.cls', 'click', function(event){
// 			$('.open').removeClass('oppenned');
// 			event.stopPropagation();
// 		});
// 	});