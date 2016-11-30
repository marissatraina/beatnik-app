$( document ).ready(function() {

	$(document).on("click",".user-playlist", function (event){ 
	     event.preventDefault(); 
	     playlist_name = $(this).attr("data-playlist-name")
	     first_track_img = $(this).attr("data-first-trck-img")
	     console.log("IMAGE", first_track_img)
	     $("h2").text(playlist_name);
	     $("#player-art").attr({"src" : first_track_img})
	     $("li.track").remove();
	     $.ajax({
	        url: '/playlist',
	        method: 'get',
	        data: {index : $(this).attr('id')}
	     }).done(function(response){
	     	$("ul").append(response);
	     	$("h2#playing-artist").text($("ul").children().first().attr("data-artist-name"))
	      $("h2#playing-song").text($("ul").children().first().attr("data-track-name"))

	     	renderPlayer();
	     })
	 
	});


	 $(document).on("click",".track",function(event){ 
	 	event.preventDefault();
	      $("audio").attr({"src" : $(this).attr("id")});
	      $("#player-art").attr({"src" : $(this).attr("data-img-url")})
	      $("h2#playing-artist").text($(this).attr("data-artist-name"))
	      $("h2#playing-song").text($(this).attr("data-track-name"))
	
	    }); 

	function renderPlayer(){
		$(function(){
		  $('#audio-player').mediaelementplayer({
		    alwaysShowControls: true,
		    features: ['playpause','progress'],
		    audioWidth: 300,
		    audioHeight: 70
		  });
	  });
	}

	renderPlayer();

});
