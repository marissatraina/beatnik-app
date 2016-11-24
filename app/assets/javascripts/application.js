// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function() {

	$(".user-playlist").on("click", function(event) {
		event.preventDefault();

		var playlistUri = $(this).attr("id");
		var playlistLink = "'https://embed.spotify.com/?uri=" + playlistUri + "'";
		var iframePlaylist = "<iframe src=" + playlistLink + " width='300' height='380' frameborder='0' allowtransparency='true'></iframe>";
		// debugger;
		$(".user-spotify-player").html(iframePlaylist);
	})
})