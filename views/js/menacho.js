$( window ).load(function() {
	$('#oculto').load( "https://txt2re.com/index.php3", function( response, status, xhr ) {
	  if ( status == "error" ) {
		var msg = "Sorry but there was an error: ";
		$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
	  }else{
		  alert(response);
		  
	  }
	});

$.ajax({
    url: "https://txt2re.com/index.php3",
    data: "",
    type: 'GET',
    success: function (resp) {
        alert(resp);
    },
    error: function(e) {
        alert('Error: '+e);
    }  
});
});
	