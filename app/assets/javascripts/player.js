$(document).ready(function() {

	var $visual = $("#visual-container");
	$("button#side-button").click(function() {
			if ($visual.hasClass("full")) {
				$(this).html("&#60;");
			} else {
				$(this).html("&#x2630;");
			};
		$visual.toggleClass("full");
	});
	
});
