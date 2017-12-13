$(document).ready( function() { 
 //Set character values
 //Attack value and CounterAttack Value
var isGameStarted = 0;
var characters = {
	cartman: {
		name: "cartman",
		userPicked: 0,
		hp: 75,
		attack: 15,
		counterAttack: 25},
	kenny: {
		name: "kenny",
		userPicked: 0,
		hp: 40,
		attack: 15,
		counterAttack: 25},
	nathan:{
		name: "nathan",
		userPicked: 0,
		hp: 95,
		attack: 15,
		counterAttack: 25},
	tweek: {
		name: "tweek",
		userPicked: 0,
		hp: 105,
		attack: 15,
		counterAttack: 25}
	};

var cartmanRender = "<div class='cartman cartmanCard tile'>\
						<div class='cartmanName'>Cartman</div>\
						<img class='cartman' src='./assets/images/cartman.png' alt='cartman'>\
						<div class='cartmanHealth'>" + characters.cartman.hp + "</div>\
					</div>\\";
var nathanRender = "<div class='nathan nathanCard tile'>\
						<div class='nathanName'>Nathan</div>\
						<img class='nathan' src='./assets/images/nathan.png' alt='nathan'>\
						<div class='nathanHealth'>" + characters.nathan.hp + "</div>\
					</div>\\";

var tweekRender = "<div class='tweek tweekCard tile'>\
						<div class='tweekName'>Tweek</div>\
						<img class='tweek' src='./assets/images/tweek.png' alt='tweek'>\
						<div class='tweekHealth'>" + characters.tweek.hp + "</div>\
					</div>\\";

var kennyRender = "<div class='kenny kennyCard tile'>\
						<div class='kennyName'>kenny</div>\
						<img class='kenny' src='./assets/images/kenny.png' alt='kenny'>\
						<div class='kennyHealth'>" + characters.kenny.hp + "</div>\
					</div>\\";

 //Render 
$("div.playerOptions").replaceWith(cartmanRender + nathanRender + tweekRender + kennyRender);


var cartmanPicked = characters.cartman.userPicked;
var nathanPicked = characters.nathan.userPicked;
var tweekPicked = characters.tweek.userPicked;
var kennyPicked = characters.kenny.userPicked;

function pickedCheck (){
	cartmanPicked = characters.cartman.userPicked;
	nathanPicked = characters.nathan.userPicked;
	tweekPicked = characters.tweek.userPicked;
	kennyPicked = characters.kenny.userPicked;
}

//select character & play game in here
function playerSelect(edit) {
	if (cartmanPicked === 0 && nathanPicked === 0 && tweekPicked === 0 && kennyPicked === 0){
		
		return characters[edit].userPicked = 1;
	
	} else if (cartmanPicked === 1 || nathanPicked === 1 || tweekPicked === 1 || kennyPicked === 1){
		console.log("the game is afoot");
		for (var key in characters){
			if (characters[key].userPicked === 0){
				$("."+key+"Health").addClass("enemy");
			} else{}
		}

	} else {}

};

//select character > Deprecated
/*function checkSelectBit(edit) {
	if (cartmanPicked === 0 && nathanPicked === 0 && tweekPicked === 0 && kennyPicked === 0){
		return characters[edit].userPicked = 1;
	} else {}
}*/

//User picks their player
$(".cartmanCard").click( function() {
	playerSelect("cartman");
	pickedCheck();
});
$(".nathanCard").click( function() {
	playerSelect("nathan");
	pickedCheck();
	});
$(".tweekCard").click( function() {
	playerSelect("tweek");
	pickedCheck();
});
$(".kennyCard").click( function() {
	playerSelect("kenny");
	pickedCheck();
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



