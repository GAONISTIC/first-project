function call() {
	$('#call-btn').attr('disabled', true);
	$('#call-status').html('Calling...');
	setTimeout(function() {
		$('#call-status').html('Connected');
	}, 5000);
	setTimeout(function() {
		$('#call-status').html('');
		$('#call-btn').attr('disabled', false);
	}, 10000);
}
