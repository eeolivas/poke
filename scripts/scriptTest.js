/**
 * window.onload is used to wait until the entire html file and its parts are accessible
 * $.ready(function(){}) does the same thing
 */




$(document).ready(function() {
	
	$("#matchupButton").click(function(){
		var pokeOne =(Math.floor(Math.random() * 720))+1;
		var pokeTwo =(Math.floor(Math.random() * 720))+1;

		
		var pokemonOne = $.parseJSON($.ajax({
			method: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + pokeOne + "/",
			success: function(data){
	  			$("#pokemonOne").html(data.name);
	  			$("#attackStat1").html("Attack: " + data.stats[4].base_stat);
	  			$("#defenseStat1").html("Defense: " + data.stats[3].base_stat);
	  			$("#speedStat1").html("Speed: " + data.stats[1].base_stat);	 
	  			return data;
	  		}
		}));
		console.log(pokemonOne); 
		
		
		var pokemonTwo = $.parseJSON($.ajax({
			method: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/" + pokeTwo + "/",
			success: function(data){
				$("#pokemonTwo").html(data.name);
	  			$("#attackStat2").html("Attack: " + data.stats[4].base_stat);
	  			$("#defenseStat2").html("Defense: " + data.stats[3].base_stat);
	  			$("#speedStat2").html("Speed: " + data.stats[1].base_stat);
	  			return data;
			}
		}));
		
		$("#battleButton").click(function(){
	
			console.log("battle begin!");
			
		});
	

	});
	
	
	
});
