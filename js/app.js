//On click add text input to list
$(document).ready(function(){
  console.log($('#add-btn'))
$('#add-btn').click(function(){

var num = 0;
  $('.incomplete').prepend(
    $('<li id="item'+
      Math.floor((Math.random() * 100) + 1)+'"><i class="fa fa-square-o" aria-hidden="true"></i>'+
      $('#add-item').val()+
      '<button type="button" class="delete-btn">Delete</button></li>'));

var clicks = true;
$('ul li i').on('click', function () {
    var element = '<li></li>';
    if (clicks % 2 == 0) { //check for an even or odd number
        $(this).addClass('fa fa-check-square');
    } else {
        $(this).removeClass('fa fa-check-square-o');
    }
    clicks++;
});

$('.delete-btn').on( "click", function( event ) {
  $( event.target ).closest( "li" ).remove();
});
});
});
