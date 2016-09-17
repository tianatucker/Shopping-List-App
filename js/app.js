//On click add text input to list
$(document).ready(function(){
$('#add-btn').click(function(){
	$('.incomplete').prepend($('<li>', {
		text: $('#add-item').val()
	}))
});
});