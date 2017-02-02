/**
 * window.onload is used to wait until the entire html file and its parts are accessible
 * $.ready(function(){}) does the same thing
 */




$(document).ready(function() {
	
	$("#submitButton").click(function(){
		var input = $("#userInput").val();
		console.log(input);
		
	$.ajax({
		method: "GET",
		url: "http://pokeapi.co/api/v2/pokemon/" + input + "/",
		success: function(data){
	  			$("#pokemonName").html(data.name);
	  		}
	});
		
	});
	
	
	
});