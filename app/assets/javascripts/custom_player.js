$( document ).ready(function() {

	$(document).on("click",".user-playlist", function (event){ 
	     event.preventDefault(); 
	     console.log("ran")
	     $("li.track").remove();
	     $.ajax({
	        url: '/playlist',
	        method: 'get',
	        data: {index : $(this).attr('id')}
	     }).done(function(response){
	     	
	     	$("ul").append(response)
	     	renderPlayer();
	     })
	 
	});


	 $(document).on("click",".track",function(event){ 
	 	event.preventDefault();
        $("audio").attr({"src" : $(this).attr("id")});
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
