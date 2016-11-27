$(document).ready(function() {

	$(".user-playlist").on("click", function(event) {
		event.preventDefault();

		var playlistUri = $(this).attr("id");
		var playlistLink = "'https://embed.spotify.com/?uri=" + playlistUri + "'";
		var iframePlaylist = "<iframe src=" + playlistLink + " width='300' height='380' frameborder='0' allowtransparency='true'></iframe>";
		$(".user-spotify-player").html(iframePlaylist);
	})

	$("button#side-hide").toggle(function(){
		$('div#visual-container').css('left', '0');
	}, function() {
		$('div#visual-container').css('left', '305px')
	})
})
