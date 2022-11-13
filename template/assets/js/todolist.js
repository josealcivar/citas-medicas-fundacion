(function($) {
  'use strict';
  $(function() {
    var todoListItem = $('.todo-list');
    var todoListInput = $('.todo-list-input');
    $('.todo-list-add-btn').on("click", function(event) {
      event.preventDefault();

      var item = $('.todo-list-input').val();

      if (item) {
        todoListItem.append("<li><div class='mdc-form-field'><div class='mdc-checkbox'><input type='checkbox' class='mdc-checkbox__native-control'/><div class='mdc-checkbox__background'><svg class='mdc-checkbox__checkmark' viewBox='0 0 24 24'><path class='mdc-checkbox__checkmark-path' fill='none' d='M1.73,12.91 8.1,19.28 22.79,4.59'/></svg><div class='mdc-checkbox__mixedmark'></div></div></div><label>" + item + "</label></div><i class='material-icons remove'>close</i></li>");
        todoListInput.val("");
      }

    });

    todoListItem.on('click', '.remove', function() {
      $(this).parent().remove();
    });

  });
})(jQuery);