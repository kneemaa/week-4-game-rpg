$(document).ready( function() { 
 //Set character values
 //Attack value and CounterAttack Value
var characters = {
	"cartman": {
		"hp": 10,
		"attack": 15,
		"counterAttack": 25},
	"kenny": {
		"hp": 10,
		"attack": 15,
		"counterAttack": 25},
	"nathan":{
		"hp": 10,
		"attack": 15,
		"counterAttack": 25},
	"tweek": {
		"hp": 10,
		"attack": 15,
		"counterAttack": 25}
	};

 //Player Selection happens here

$("div.playerOptions").append("<div class='cartman character'><img class='cartman' src='./assets/images/cartman.png' alt='cartman'></div");
$("div.playerOptions").append("<div class='nathan character'><img class='nathan' src='./assets/images/nathan.png' alt='nathan'></div");
$("div.playerOptions").append("<div class='tweek character'><img class='tweek' src='./assets/images/tweek.png' alt='tweek'></div");
$("div.playerOptions").append("<div class='kenny character'><img class='kenny' src='./assets/images/kenny.png' alt='kenny'></div");
 // - Non selected players go to defender section


 //enemies available to attack gets populated

 //Select enemy and move to Defend area

 //Attack button
 //attack damage doubles each click
 //counter attacks stay the same


 //Loss Logic

 //Win Logic

 //complete win logic






});