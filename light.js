$(document).ready(function() {
	// cycling
	var roomtypes = ['blank', 'normal', 'treasure', 'store',
	'boss', 'arcade', 'library', 'challenge'];

	$('.tile').click(function() {
		// update tile color
		for (var i = 0; i < roomtypes.length; i++) {
			if ($(this).hasClass(roomtypes[i])) {
				$(this).removeClass(roomtypes[i])
					.addClass(roomtypes[(i+1)%roomtypes.length]);
				break; // otherwise we cycle all of them!
			}
		}

		// mark last with x
		if ($(this).parent().parent().data('lastClicked')) {
			$(this).parent().parent().data('lastClicked').text('');
		}
		$(this).parent().parent().data('lastClicked', $(this));
		$(this).text('x');
	});
});