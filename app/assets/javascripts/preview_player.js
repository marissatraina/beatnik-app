$( document ).ready(function() {

	$(document).on("click",".user-playlist",function (event){ 
	     event.preventDefault(); 
	     $("div.user-spotify-player").remove();
	     $.ajax({
	        url: '/playlist',
	        method: 'get',
	        data: {index : $(this).attr('id')}
	     }).done(function(response){
	     	console.log(response)
	     	$("div.sidebar").append(response)
	     })
	 
	});
  
});








	   