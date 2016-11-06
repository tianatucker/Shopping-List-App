//On click add text input to list
$(document).ready(function(){
  console.log($('#add-btn'))
$('#add-btn').click(function(){
  /*console.log($('#add-item'))
  $('.incomplete').prepend($('<li><i class="fa fa-square-o"></i><button type="button" class="delete-btn">Delete</button></li>', {
    'text': $('#add-item').val()
  }));*/

  $('.incomplete').prepend(
    $('<li id="'+'id1'+'"><i class="fa fa-square-o"></i>'+$('#add-item').val()+'<button type="button" class="delete-btn" id="'+'id1'+'">Delete</button></li>'));

var clicks = true;
$('ul li i').on('click', function () {
    var element = '<li></li>';
    if (clicks % 2 == 1) { //check for an even or odd number
        $(this).addClass('fa fa-check-square');
    } else {
        $(this).removeClass('fa fa-check-square');
    }
    clicks++;
});

$('.delete-btn').click(function(){
  $('li').empty();
});
});
});
/*
var clicks = true;
$('ul li').on('click', function () {
    var element = '<li></li>';
    if (clicks % 2 == 1) { //check for an even or odd number
        $(this).addClass('special');
    } else {
        $(this).removeClass('special');
    }
    clicks++;
});

$('ul').one('mouseover', 'li', function() {
    $(this).append('<input type="button" value="Delete" class="delete-btn">');
  });

$('ul li').click(function() {
    var clicks = $(this).data('click');
    if (clicks) {
      addClass('special');
    } else {
      removeClass('special');
    }
  });
});
});

/*When a unchecked box is clicked replace it with a checkmark
$('ul').on('click', 'li', function() {
    $(this).toggleClass('special');
    console.log("checkbox clicked");
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

//console.log trace everything to verify that they are being applied to the right items
//console.log the string you're using in jquery $ s not $ o



