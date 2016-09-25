//On click add text input to list
$(document).ready(function(){
$('#add-btn').click(function(){
	$('.incomplete').prepend($('<li>', {
		text: $('#add-item').val()
	}))
});

//Check for new DOM elements and apply checkmark on click event
$('.incomplete').bind('DOMNodeInsertedIntoDocument',function(){
    $('li').on('click', function() {
    $(this).toggleClass('special');
});
});

//When a unchecked box is clicked replace it with a checkmark
$('li').on('click', function() {
    $(this).toggleClass('special');
});
});

//Check for new DOM elements and apply checkmark on click event
$('.incomplete').bind('DOMNodeInsertedIntoDocument',function(){
    $('li').on('click', function() {
    $(this).toggleClass('special');
});
});

//Show the delete button when rolling over a list item

//Remove list item when the delete button is clicked


//Notes with Nick

//Maybe connect all button clicks to this

//Jquery delagate for parent element's children, so instead process at the parent level then delegate the to correct child

//Or find an li with a search string that was closest(surrounding/incompasses) to my mouse pointer. Event handler needed


