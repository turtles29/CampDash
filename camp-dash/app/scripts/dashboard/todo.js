'use strict';
//hide Todo widget
$( document ).ready(function() {
    $('.todo-window').hide();
    toggleTodoDiv();

    //check off todos by clicking on them
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    //click on trash to delete task
    $('ul').on('click', 'span', function(event){
        $(this).parent().fadeOut(600, function() {
            $(this).remove();
        });
        event.stopPropagation();
    });

    //enter input text to add a new task on top
    $('input[type="text"]').keypress(function(event) {
        if(event.which === 13){
            //grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val('');
            //create a new li and add to ul
            $('ul').append('<li>' + todoText + ' <span><i class="fa fa-trash"></i></span></li>');
        } 
});

});

//make Todo widget togle on click
function toggleTodoDiv() {
    $('#todo-button').click(function() {
            $('.todo-window').toggle('slow');
    });
}

