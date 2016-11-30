$( document ).ready(function() {

	$(document).on("click",".user-playlist", function (event){ 
	     event.preventDefault(); 
	     playlist_name = $(this).attr("data-playlist-name")
	     first_track_img = $(this).attr("data-first-trck-img")
	     console.log("IMAGE", first_track_img)
			 $(".mejs-pause button").css("background-position", "0 0" )	     
			 $("h2").text(playlist_name);
	     $("#player-art").attr({"src" : first_track_img})
			 $("audio").attr({"src" : $("li.track").first().parent().attr("id")})
			 $("li.track").remove();
	     $.ajax({
	        url: '/playlist',
	        method: 'get',
	        data: {index : $(this).attr('id')}
	     }).done(function(response){
	     	$("ul#playlist").append(response);
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
	      $("button").eq(1).click()
	
	    });

	 $(document).on("click", $("button").eq(1), function(){
	 		if ($(this).hasClass("mejs-pause")) {
	 			 $(this).attr({"class" : "mejs-play" });
	 			 $(this).removeClass("mejs-pause");
	 		} else if ($(this).hasClass("mejs-play")) {
	 				$(this).attr({"class" : "mejs-pause" });
	 				$(this).removeClass("mejs-pause");
	 		}
	 })

	 $(document).on("click", "ul#styles-list li", function(event) {
	 	event.preventDefault();
	 	var visualizer = $(this).attr("class");
	 	$.ajax({
	 		url: '/users/visual_selector',
	 		method: 'get',
	 		data: { visual: visualizer }
	 	}).done(function(response) {
	 		$("canvas").remove();
			$("div.visuals").empty();
			$("div.visuals").append(response);
	 	})
	 })


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
