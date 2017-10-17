
function attachEventHandlers() {
	$('.image').on('click', handleImageClick);
}

function handleImageClick(e) {
	const target = $(e.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');

	// TODO
	
}

$('document').ready(function() {
	
	attachEventHandlers();
	
});