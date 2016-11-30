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
});
