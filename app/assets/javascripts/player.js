$(document).ready(function() {

	var $hidden = $("#hidden-container");
	$("button#side-button").click(function() {
			if ($hidden.hasClass("hidden")) {
				$(this).html("&#60;");
			} else {
				$(this).html("&#x2630;");
			};
		$hidden.toggleClass("hidden");
		$(this).toggleClass("forward");
	});

	var $dropdown = $("div#logout-drop-down");
	$("button#down-arrow").click(function() {
		$dropdown.toggleClass("hidden");
	});

	var $styles = $("div#styles-dropdown");
		$("button#styles-button").click(function() {
			$styles.toggleClass("hidden");
		})
});
