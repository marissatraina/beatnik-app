$(document).ready(function() {

	$(document).on("click", "button.visual-down-arrow", function(event) {
		event.preventDefault();
		$.ajax({
			url: '/users/visual_selector',
			method: 'GET'
		}).done(function(response) {
			// debugger;
			$("script#vines-script").stop(true, false);
			$("canvas").remove();
			$("div.visuals").empty();
			$("div.visuals").append(response);
		})
	})
})