$(document).ready(function() {

	$(document).on("click", "button.visual-down-arrow", function(event) {
		event.preventDefault();
		var visual;
		if ($("script#vines-script").length > 0) {
			visual = 'sine';
		} else if ($("script#sine-script").length > 0) {
			visual = 'spacecomb';
		} else {
			visual = 'vines'
		}
		$.ajax({
			url: '/users/visual_selector',
			method: 'GET',
			data: {visual: visual}
		}).done(function(response) {
			$("canvas").remove();
			$("div.visuals").empty();
			$("div.visuals").append(response);
		})
	})
})