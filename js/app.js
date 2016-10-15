//On click add text input to list
$(document).ready(function(){
$('#add-btn').click(function(){
	$('.incomplete').prepend($('<li>', {
		'text': $('#add-item').val()
  }));
$('ul').one('mouseover', 'li', function() {
    $(this).append('<input type="button" value="Delete" class="delete-btn">');
  });

//When a unchecked box is clicked replace it with a checkmark
$('ul').on('click', 'li', function() {
    $(this).toggleClass('special');
  });
});
});
/*
$('li').on('hover', function() {
    $(this).add("<input>").appendTo(".incomplete");
  });
});

$('ul').mouseover('li', function(){
  $('.delete-btn').css('display','inline');
});

$('ul').hover('li', function() {
    $(this).after('<input type="button" value="Delete" class="delete-btn" />');
  });*/

//Show the delete button when rolling over a list item

//Remove list item when the delete button is clicked

/*Check for new DOM elements and apply checkmark on click event
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

/*$('.incomplete').on('DOMNodeInserted', function(e){
  if ($(e.target).is('.MyClass')) {
       DoSomething($(e.target));
    }
});*/

//Notes with Nick

//Maybe connect all button clicks to this

//Jquery delagate for parent element's children, so instead process at the parent level then delegate the to correct child

//Or find an li with a search string that was closest(surrounding/incompasses) to my mouse pointer. Event handler needed

//Only need one click (handler) event on the li

//Have to close things in reverse order

//If it's a

