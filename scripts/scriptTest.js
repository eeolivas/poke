/**
 * window.onload is used to wait until the entire html file and its parts are accessible
 * $.ready(function(){}) does the same thing
 */




$(document).ready(function() {
	
	$("#matchupButton").click(function(){
		var pokeOne =(Math.floor(Math.random() * 720))+1;
		var pokeTwo =(Math.floor(Math.random() * 720))+1;

		
//		function getPokemonID(num) {
//		    var result=null;
//		    $.ajax({
//		      url:"https://pokeapi.co/api/v2/pokemon/" + num + "/",
//		      async: false,  
//		      success:function(data) {
//		         result = data.id; 
//		      }
//		   });
//		   return result;
//		}
//		
//		
//		function getPokemonName(num) {
//			var result=null;
//			$.ajax({
//				url:"https://pokeapi.co/api/v2/pokemon/" + num + "/",
//				async: false,  
//				success:function(data) {
//					result = data.name; 
//				}
//			});
//			return result;
//		}
//		
//		
//		var pokemon1 = {
//			"id": null,
//			"name" : null
//		};
//		
//		pokemon1.id=getPokemonID(pokeOne);
//		pokemon1.name=getPokemonName(pokeOne);
//		
//		console.log(pokemon1.id);
//		console.log(pokemon1.name);
//
//		
//		
//		
		
		
		function getPokemon(num) {
		    var result=null;
		    $.ajax({
		      url:"https://pokeapi.co/api/v2/pokemon/" + num + "/",
		      async: false,  
		      success:function(data) {
		         result = data; 
		      }
		   });
		   return result;
		}
		
		var poke1 = getPokemon(pokeOne);
		console.log(poke1.name);
			$("#pokemonOne").html(poke1.name);
  			$("#attackStat1").html("Attack: " + poke1.stats[4].base_stat);
  			$("#defenseStat1").html("Defense: " + poke1.stats[3].base_stat);
  			$("#speedStat1").html("Speed: " + poke1.stats[1].base_stat);
		
		
		var poke2 = getPokemon(pokeTwo);
		console.log(poke2.name);
		$("#pokemonOne").html(poke2.name);
			$("#attackStat1").html("Attack: " + poke2.stats[4].base_stat);
			$("#defenseStat1").html("Defense: " + poke2.stats[3].base_stat);
			$("#speedStat1").html("Speed: " + poke2.stats[1].base_stat);
		
//			$.ajax({
//			method: "GET",
//			url: "https://pokeapi.co/api/v2/pokemon/" + pokeOne + "/",
//			success: function(data){
//	  			$("#pokemonOne").html(data.name);
//	  			$("#attackStat1").html("Attack: " + data.stats[4].base_stat);
//	  			$("#defenseStat1").html("Defense: " + data.stats[3].base_stat);
//	  			$("#speedStat1").html("Speed: " + data.stats[1].base_stat);	 
//	  		}
//		}); 
		
//		
//			$.ajax({
//			method: "GET",
//			url: "https://pokeapi.co/api/v2/pokemon/" + pokeTwo + "/",
//			success: function(data){
//				$("#pokemonTwo").html(data.name);
//	  			$("#attackStat2").html("Attack: " + data.stats[4].base_stat);
//	  			$("#defenseStat2").html("Defense: " + data.stats[3].base_stat);
//	  			$("#speedStat2").html("Speed: " + data.stats[1].base_stat);
//			}
//		});
		
		$("#battleButton").click(function(){
	
			console.log("battle begin!");
			
		});
	

	});
	
	
	
});
