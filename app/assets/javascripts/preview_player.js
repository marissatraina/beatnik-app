$( document ).ready(function() {

	$(".user-playlist").click(function (event){ 
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








	   