$(function() {
	var UserImageWidth = $('.UserImage').width();
	$('.UserImage').css('height', UserImageWidth);
});


var dm = $('#CategroiesList').children('li').children('a');
dm.click(function(){
	if(!$(this).hasClass('active')){
		dm.removeClass('active');
		$(this).toggleClass('active');
		var data_var = $(this).data();
	}
})

$('#hireModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var recipient = button.data('whatever') // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this)
	modal.find('.modal-title').text('Hiring ' + recipient)
	modal.find('.modal-body input').val(recipient)
  })

  $('#UserStatusSwitch').click(function(){
	  $(this).toggleClass('btn-outline-primary btn-secondary');
	  if($(this).hasClass('btn-secondary')){
		  $(this).html("Busy");
		}
		else{
			$(this).html("Free");

	  }
  });


  $('#UserChangeName').on('change', function(){
	  $('#UserSubmit').removeAttr('disabled');
	  $('#UserSubmit').toggleClass('btn-secondary btn-primary');
  })
  $('#PositionChange').on('change', function(){
	  $('#UserSubmit').removeAttr('disabled');
	  $('#UserSubmit').toggleClass('btn-secondary btn-primary');
  })