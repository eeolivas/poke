/**
 * window.onload is used to wait until the entire html file and its parts are accessible
 * $.ready(function(){}) does the same thing
 */


$(document).ready(function() {

	var global ={};
	global.poke=[];
	global.counter=0;

	function getPokemon(){
		
		global.counter=0;
		console.log("beginning loop");
		for(ii=0; ii<2; ii++){
			var rand =(Math.floor(Math.random() * 720))+1;
				$.ajax({
					url:"https://pokeapi.co/api/v2/pokemon/" + rand + "/",  
					success:function(data) {
						global.poke.unshift(data);
						global.counter++;
						console.log(global.counter);
						if(global.counter === 2){
							$("#showMatchup").removeClass("hidden");
						}
						if(global.poke.length > 1){
							global.poke.splice(2,2);
						}						
						console.log("length of pokemon array " + global.poke.length);
					}
				});

			}
		}

	function clearInfoFields(){
		$("#showMatchup").addClass("hidden");
		$("#pokemonOne").html(" ");
	};

//	function getPic(location, num){
//		var pokeId = global.poke[num].id;
//		var url = "resources/sprites/pokemon/" + pokeId + ".png"
//		$(#location).prepend('<img id="theImg" src="'+ url +" />");
//	}
	
	
	$("#genMatchup").click(function(){
		clearInfoFields();
		getPokemon();
	});
		
		
	$("#showMatchup").click(function(){
		console.log("button clicking now!");
		
		
		//fully qalified name for the local server - just use relative path when deploying to github
	//	var url1 = "<img src=L:\resources\sprites\pokemon/" + global.poke[0].id + ".png />"
		
		//use this when deploying to github for sprites
		var url1 = "<img src=resources/sprites/pokemon/" + global.poke[0].id + ".png />"
		$('#pokePic1').empty().prepend(url1);
		
		
		
		
//		var url1 = "resources/sprites/pokemon/" + global.poke[0].id + ".png"
//		$('#pokePic1').prepend('<img id="theImg" src="'+ url +" />")
//		
		
//		$('#test').empty().append('<img src="/static/on.png" height="64px" width="64px">');
//		$('#pokePic1').prepend('<img id="theImg" src="theImg.png" />')

			$("#pokemonOne").html(global.poke[0].name);
			$("#attackStat1").html("Attack: " + global.poke[0].stats[4].base_stat);
//			$("#defenseStat1").html("Defense: " + global.poke[0].stats[3].base_stat);
//			$("#speedStat1").html("Speed: " + poke[0].stats[0].base_stat);
			$("#pokemonTwo").html(global.poke[1].name);
			$("#attackStat2").html("Attack: " + global.poke[1].stats[4].base_stat);
//			$("#defenseStat2").html("Defense: " + global.poke[1].stats[3].base_stat);
//			$("#speedStat2").html("Speed: " + global.poke[1].stats[0].base_stat);
		
	});

		
		
		$("#battleButton").click(function(){
	
			console.log("battle begin!");
			
		

		});
	
	
	
});
