$(document).ready(function() {

	$(".user-playlist").on("click", function(event) {
		event.preventDefault();

		var playlistUri = $(this).attr("id");
		var playlistLink = "'https://embed.spotify.com/?uri=" + playlistUri + "'";
		var iframePlaylist = "<iframe src=" + playlistLink + " width='300' height='380' frameborder='0' allowtransparency='true'></iframe>";
		$(".user-spotify-player").html(iframePlaylist);
	});

	var $visual = $("#visual-container");
	$("button#side-button").click(function() {
			if ($visual.hasClass("full")) {
				$(this).html("&#x2630;");
			} else {
				$(this).html("&#60;");
			};
		$visual.toggleClass("full");
	});
});
