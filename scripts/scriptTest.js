/**
 * window.onload is used to wait until the entire html file and its parts are accessible
 * $.ready(function(){}) does the same thing
 */




$(document).ready(function() {
	
	$("#submitButton").click(function(){
		var pokeOne =(Math.floor(Math.random() * 720))+1;
		var pokeTwo =(Math.floor(Math.random() * 720))+1;
		
	$.ajax({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/" + pokeOne + "/",
		success: function(data){
	  			$("#pokemonOne").html(data.name);
	  		}
	});
	$.ajax({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/" + pokeTwo + "/",
		success: function(data){
			$("#pokemonTwo").html(data.name);
		}
	});
	
	
	

		
	});
	
	
	
});
