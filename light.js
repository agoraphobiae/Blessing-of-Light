$(document).ready(function() {

	$('.tile').click(function() {
		updateTileColor($(this), 1);
	});

	$('.tile').bind("contextmenu", function(e) {
		event.preventDefault();
		updateTileColor($(this), -1);
	});
});

function updateTileColor(elem, step) {
	// cycling
	var roomtypes = ['blank', 'normal', 'treasure', 'store',
	'boss', 'arcade', 'library', 'challenge'];
	
	// update tile color
	for (var i = 0; i < roomtypes.length; i++) {
		if (elem.hasClass(roomtypes[i])) {
			elem.removeClass(roomtypes[i])
				.addClass(roomtypes[ 
					i+1*step >= 0 ? (i+1*step)%roomtypes.length : roomtypes.length - 1
					]);
			break; // otherwise we cycle all of them!
		}
	}

	// mark last with x
	if (elem.parent().parent().data('lastClicked')) {
		elem.parent().parent().data('lastClicked').text('');
	}
	elem.parent().parent().data('lastClicked', elem);
	elem.text('x');
}