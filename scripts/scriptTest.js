/**
 * window.onload is used to wait until the entire html file and its parts are accessible
 * $.ready(function(){}) does the same thing
 */


$(document).ready(function() {

	var global ={};
	global.poke=[];
	global.counter=0;
	global.pokeLevel=[0,0];
	global.points=100;

	function generatePokeLevels(){
		var level1=0;
		var level2=0;
		do{
			level1 =(Math.floor(Math.random() * 99))+1;
			global.pokeLevel[0] = level1;
			level2 =(Math.floor(Math.random() * 99))+1;
			global.pokeLevel[1] = level2;
		} while((level1>(1.25*level2))||(level2>(1.25*level1)));
	}
	
	// randomly generates pokemon and stores them as objects in global.poke[]
	function getPokemon(){
		generatePokeLevels();
		global.counter=0;
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
						
					}
				});

			}
		}
	
	//clears all fields for a new battle
	function clearInfoFields(){
		$("#showMatchup").addClass("hidden");
		$("#battleBtn").addClass("hidden");
		$('#poke1HpBar').attr('aria-valuenow',100).css('width',100 +'%');
		$('#poke2HpBar').attr('aria-valuenow',100).css('width',100 +'%');
		$('#pokePic1').addClass("hidden");
		$('#pokePic2').addClass("hidden");
		$('#poke1Hp').addClass("hidden");
		$('#poke2Hp').addClass("hidden");
		$("#pokemonOne").empty();
		$("#pokemonLevelOne").empty();
		$("#pokemonLevelTwo").empty();
		$("#pokemonTwo").empty();
		$("#heightOne").empty();
		$("#heightTwo").empty();
		$("#weightOne").empty();
		$("#weightTwo").empty();
	};
	
	$("#genMatchup").click(function(){
		clearInfoFields();
		getPokemon();
	});
		
		
	$("#showMatchup").click(function(){
		console.log("show Matchup Now");
		//Grabs the images and places them in the correct location on html file
		var url1 = "<img src=resources/sprites/pokemon/" + global.poke[0].id + ".png width=\"30%\" />"
		var url2 = "<img src=resources/sprites/pokemon/" + global.poke[1].id + ".png width=\"30%\"/>"
		
		// displays the pokemon pic and stats
		$('#pokePic1').empty().prepend(url1);
		$('#pokePic2').empty().prepend(url2);
		$('#pokePic1').removeClass("hidden");
		$('#pokePic2').removeClass("hidden");
		$('#poke1Hp').removeClass("hidden");
		$('#poke2Hp').removeClass("hidden");
		$("#pokemonOne").html(global.poke[0].name);
		$("#pokemonTwo").html(global.poke[1].name);
		$("#pokemonLevelOne").html("Level: " + global.pokeLevel[0]);
		$("#pokemonLevelTwo").html("Level: " + global.pokeLevel[1]);
		$("#heightOne").html("Height: " + (global.poke[0].height)/10 + "m");
		$("#heightTwo").html("Height: " + (global.poke[1].height)/10 + "m");
		$("#weightOne").html("Weight: " + (global.poke[0].weight)/10 + "kg");
		$("#weightTwo").html("Weight: " + (global.poke[1].weight)/10 + "kg");
		$("#battleBtn").removeClass("hidden");
		$("#showMatchup").addClass("hidden");
	});

		
		
	$("#battleButton").click(function(){
		
		console.log("battle begin!");
		var turn=0; //denotes which is pokemon is to be losing its health - the array value
		var poke0Lvl = global.pokeLevel[0];
		var poke1Lvl = global.pokeLevel[1];		
		var poke0Hp = (10*(global.poke[0].stats[5].base_stat))+(2.5*poke0Lvl);
		var maxPoke0Hp = (10*(global.poke[0].stats[5].base_stat))+(2.5*poke0Lvl);
		var poke1Hp = (10*(global.poke[1].stats[5].base_stat))+(2.5*poke1Lvl);
		var maxPoke1Hp = (10*(global.poke[1].stats[5].base_stat))+(2.5*poke1Lvl);
		
		var poke0Percent = (poke0Hp/maxPoke0Hp);
		var poke1Percent = (poke1Hp/maxPoke1Hp);
		var poke0Atk = global.poke[0].stats[4].base_stat+(2.5*poke0Lvl);;
		var poke1Atk = global.poke[1].stats[4].base_stat+(2.5*poke1Lvl);;
		var poke0Dfns = global.poke[0].stats[3].base_stat+(2.5*poke0Lvl);;
		var poke1Dfns = global.poke[1].stats[3].base_stat+(2.5*poke1Lvl);;
		var poke0Spd = (global.poke[0].stats[0].base_stat)+(2*poke0Lvl);
		var poke1Spd = (global.poke[1].stats[0].base_stat)+(2*poke1Lvl);
		
		
		console.log(global.poke[0].name+ " Hp: " + poke0Hp);
		console.log(global.poke[0].name + " Attack: " + poke0Atk);
		console.log(global.poke[0].name+ " Defense: " + poke0Dfns);
		console.log(global.poke[0].name + " Speed: " + poke0Spd);
		console.log(global.poke[1].name+ " Hp: " + poke1Hp);
		console.log(global.poke[1].name + " Attack: " + poke1Atk);
		console.log(global.poke[1].name+ " Defense: " + poke1Dfns);
		console.log(global.poke[1].name + " Speed: " + poke1Spd);


		
		// determines which gets to make the first move based on poke's speed stat
		if(poke0Spd >= poke1Spd){
			turn=1;
		}
		
		var damage=0;
		var crit=0; //variable for determining ciritcal hits
		var miss=0; // determines if a pokemon is going to miss its attack
		while((poke0Hp>0) && (poke1Hp>0) ){
			if(turn===0){
				damage = ((((2*poke1Lvl)+10)/200)*((poke1Atk*poke1Atk)/(1.25*poke0Dfns))+2);
				console.log(global.poke[1].name + " attacking now");
				crit=(Math.floor(Math.random() * 249))+1;
				miss=(Math.floor(Math.random() * 99))+1;
				if(miss%6 ===0){
					console.log("MISSED!");
					poke0Hp=poke0Hp+0;
				}else if((global.poke[1].stats[0].base_stat)>crit){
					console.log("ciritical hit!");
					poke0Hp = poke0Hp -(2*damage);
				}else{
					poke0Hp = poke0Hp -damage;
				}
				poke0Percent = Math.round((poke0Hp/maxPoke0Hp)*100);
				$('#poke1HpBar').attr('aria-valuenow',poke0Percent).css('width',poke0Percent +'%');
				console.log(global.poke[0].name + " Hp: " + poke0Hp);
			} else{
				damage = ((((2*poke0Lvl)+10)/200)*((poke1Atk*poke1Atk)/(1.25*poke0Dfns))+2);
				console.log(global.poke[0].name + " attacking now");
				crit=(Math.floor(Math.random() * 249))+1;
				miss=(Math.floor(Math.random() * 99))+1;
				if(miss%6 ===0){
					console.log("MISSED!");
					poke1Hp=poke1Hp+0;
				}else if((global.poke[0].stats[0].base_stat)>crit){
					console.log("ciritical hit!");
					poke1Hp = poke1Hp -(2*damage);
				}else{
					poke1Hp = poke1Hp -damage;
				}
				poke1Percent = Math.round((poke1Hp/maxPoke1Hp)*100);
				$('#poke2HpBar').attr('aria-valuenow',poke1Percent).css('width',poke1Percent +'%');
				console.log(global.poke[1].name + " Hp: " + poke1Hp);
			}
			turn++;
			turn = turn%2;
		}
		
		if(poke0Hp<=0){
			console.log(global.poke[1].name + " WINS!");
		}
		if(poke1Hp<=0){
			console.log(global.poke[0].name + " WINS!");
		}
		
		$("#showMatchup").addClass("hidden");
		$("#battleBtn").addClass("hidden");
		
		
		});
	
	
	
});
