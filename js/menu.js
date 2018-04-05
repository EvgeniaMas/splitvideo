// $(document).ready(function() {
// 		$(document).delegate('.open', 'click', function(event){
// 			$(this).addClass('oppenned');
// 			$('.close_menu').addClass('closed');
// 			event.stopPropagation();
// 		})
// 		$(document).delegate('body', 'click', function(event) {
// 			$('.open').removeClass('oppenned');
// 		})
// 		$(document).delegate('.close_menu', 'click', function(event){
// 			$('.open').removeClass('oppenned');
// 			$('.close_menu').removeClass('closed');
// 			event.stopPropagation();
// 		});
// 	});


$(document).ready(function() {
$('.open').on('click', function (e) {
  $(this).addClass('oppenned');
  $('.close_menu').addClass('closed');
  // e.stopPropagation();
})

$('.close_menu').on('click', function (e) {
  $('.open').removeClass('oppenned');
  $('.close_menu').removeClass('closed');
  // e.stopPropagation();
})

});