$(document).ready( function() { 
 //Set character values
 //Attack value and CounterAttack Value
var isGameStarted = 0;
var characters = {
	"cartman": {
		"userPicked": 0,
		"hp": 10,
		"attack": 15,
		"counterAttack": 25},
	"kenny": {
		"userPicked": 0,
		"hp": 10,
		"attack": 15,
		"counterAttack": 25},
	"nathan":{
		"userPicked": 0,
		"hp": 10,
		"attack": 15,
		"counterAttack": 25},
	"tweek": {
		"userPicked": 0,
		"hp": 10,
		"attack": 15,
		"counterAttack": 25}
	};

var cartmanRender = "<div class='cartman character tile'>\
						<div class='cartmanName'>Cartman</div>\
						<img class='cartman' src='./assets/images/cartman.png' alt='cartman'>\
						<div class='cartmanHealth'>" + characters.cartman["hp"] + "</div>\
					</div>\\";
var nathanRender = "<div class='nathan character tile'>\
						<div class='nathanName'>Nathan</div>\
						<img class='nathan' src='./assets/images/nathan.png' alt='nathan'>\
						<div class='nathanHealth'>" + characters.nathan["hp"] + "</div>\
					</div>\\";

var tweekRender = "<div class='tweek character tile'>\
						<div class='tweekName'>Tweek</div>\
						<img class='tweek' src='./assets/images/tweek.png' alt='tweek'>\
						<div class='tweekHealth'>" + characters.tweek["hp"] + "</div>\
					</div>\\";

var kennyRender = "<div class='kenny character tile'>\
						<div class='kennyName'>kenny</div>\
						<img class='kenny' src='./assets/images/kenny.png' alt='kenny'>\
						<div class='kennyHealth'>" + characters.kenny["hp"] + "</div>\
					</div>\\";

 //Render 
$("div.playerOptions").replaceWith(cartmanRender + nathanRender + tweekRender + kennyRender);


var cartmanPicked = characters.cartman.userPicked;
var nathanPicked = characters.nathan.userPicked;
var tweekPicked = characters.tweek.userPicked;
var kennyPicked = characters.kenny.userPicked;


//play game in here
function playerSelect() {
	if (cartmanPicked === 1 || nathanPicked === 1 || tweekPicked === 1 || kennyPicked === 1){
	}
};

//select character here


function checkSelectBit(edit) {
	if (cartmanPicked === 0 && nathanPicked === 0 && tweekPicked === 0 && kennyPicked === 0){
		characters.cartman["userPicked"] = 1;
		console.log(cartmanPicked);
	} else {}
}

//User picks their player
$(".cartman").click( function() {
	checkSelectBit("cartman");
	console.log(cartmanPicked);
	playerSelect();
});
$(".nathan").click( function() {
	nathanPicked = 1;
	playerSelect();
	});
$(".tweek").click( function() {
	tweekPicked = 1;
	playerSelect();
});
$(".kenny").click( function() {
	kennyPicked = 1;
	playerSelect();
});


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



