$(document).ready(function() {

	$(document).on("click", "button.visual-down-arrow", function(event) {
		event.preventDefault();
		// debugger;
		var visual;
		if ($("script#vines-script").length > 0) {
			visual = 'sine';
		} else {
			visual = 'vines';
		}
		// debugger;
		$.ajax({
			url: '/users/visual_selector',
			method: 'GET',
			data: {visual: visual}
		}).done(function(response) {
			// debugger;
			$("canvas").remove();
			$("div.visuals").empty();
			$("div.visuals").append(response);
		})
	})
})