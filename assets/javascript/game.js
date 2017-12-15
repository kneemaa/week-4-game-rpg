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
		counterAttack: 25,
		isDefending: false,
		isAlive: true},
	kenny: {
		name: "kenny",
		userPicked: 0,
		hp: 40,
		attack: 15,
		counterAttack: 25,
		isDefending: false,
		isAlive: true},
	nathan:{
		name: "nathan",
		userPicked: 0,
		hp: 95,
		attack: 15,
		counterAttack: 25,
		isDefending: false,
		isAlive: true},
	tweek: {
		name: "tweek",
		userPicked: 0,
		hp: 105,
		attack: 15,
		counterAttack: 2,
		isDefending: false,
		isAlive: true}
	};

function cartmanRender(classChange) {
	var render = "<div class='cartman cartmanWrapper cartmanCard tile'>\
		<div class='cartmanName'>Cartman</div>\
		<img class='cartman' src='./assets/images/cartman.png' alt='cartman'>\
		<div class='cartmanHealth " + classChange + "'>" + characters.cartman.hp + "</div>\
	</div>";
	return render;
};

function nathanRender (classChange) {
	var render = "<div class='nathan nathanCard tile'>\
			<div class='nathanName'>Nathan</div>\
			<img class='nathan' src='./assets/images/nathan.png' alt='nathan'>\
			<div class='nathanHealth " + classChange + "'>" + characters.nathan.hp + "</div>\
		</div>";
		return render;
};

function tweekRender(classChange) {
	var render = "<div class='tweek tweekCard tile'>\
						<div class='tweekName'>Tweek</div>\
						<img class='tweek' src='./assets/images/tweek.png' alt='tweek'>\
						<div class='tweekHealth " + classChange + "'>" + characters.tweek.hp + "</div>\
					</div>";
	return render;
};
function kennyRender(classChange) {
	var render = "<div class='kenny kennyCard tile'>\
						<div class='kennyName'>Kenny</div>\
						<img class='kenny' src='./assets/images/kenny.png' alt='kenny'>\
						<div class='kennyHealth " + classChange + "'>" + characters.kenny.hp + "</div>\
					</div>";
	return render;
};


 //Render
$(".playerOptions").html("<div>Choose Your Character</div>" + cartmanRender() + nathanRender() + tweekRender() + kennyRender());

var cartmanPicked = characters.cartman.userPicked;
var nathanPicked = characters.nathan.userPicked;
var tweekPicked = characters.tweek.userPicked;
var kennyPicked = characters.kenny.userPicked;
var cartmanDefending = characters.cartman.isDefending;
var nathanDefending = characters.nathan.isDefending;
var tweekDefending = characters.tweek.isDefending;
var kennyDefending = characters.kenny.isDefending;

function pickedCheck (){
	cartmanPicked = characters.cartman.userPicked;
	nathanPicked = characters.nathan.userPicked;
	tweekPicked = characters.tweek.userPicked;
	kennyPicked = characters.kenny.userPicked;
	
	cartmanDefending = characters.cartman.isDefending;
	nathanDefending = characters.nathan.isDefending;
	tweekDefending = characters.tweek.isDefending;
	kennyDefending = characters.kenny.isDefending;

}

//select character & play game in here
function playerSelect(who) {
	var buildEnemySelection = "";
	var playerCharacter = "";
	if (cartmanPicked === 0 && nathanPicked === 0 && tweekPicked === 0 && kennyPicked === 0){
		characters[who].userPicked = 1;
		for (var key in characters){
			if (characters[key].userPicked === 0 && characters[key].isAlive === true){
				switch(characters[key].name) {
					case "cartman":
						buildEnemySelection += cartmanRender("enemy");
						break;
					case "nathan":
						buildEnemySelection += nathanRender("enemy");
						break;
					case "tweek":
						buildEnemySelection += tweekRender("enemy");
						break;
					case "kenny":
						buildEnemySelection += kennyRender("enemy");
						break;
					default:
						console.log("no match found for " + characters[key].name);
				}
			} else if (characters[key].userPicked === 1) {
				switch (characters[key].name) {
					case "cartman":
						playerCharacter += cartmanRender("attacker");
						break;
					case "nathan":
						playerCharacter += nathanRender("attacker");
						break;
					case "tweek":
						playerCharacter += tweekRender("attacker");
						break;
					case "kenny":
						playerCharacter += kennyRender("attacker");
						break;
					default:
						console.log("no match found for " + characters[key].name);
					
				}
			} else {}
		}
		$(".playerOptions").replaceWith("<div class='playerOptions'>Your Character</div>" + playerCharacter);
		$(".enemiesToAttack").replaceWith("<div class='enemyOptions'>Your Enemies</div>" + buildEnemySelection);
	}
};

function makeDefender(who) {
	console.log("defend!");
	if ((cartmanPicked === 1 || nathanPicked === 1 || tweekPicked === 1 || kennyPicked === 1) && (cartmanDefending === false && nathanDefending === false && tweekDefending === false & kennyDefending === false)){
		characters[who].isDefending = true;
		console.log("banana");
		for (var key in characters){
			switch (characters[key].isDefending === true){
					case "cartman":
						playerCharacter += cartmanRender("defending");
						break;
					case "nathan":
						playerCharacter += nathanRender("defending");
						break;
					case "tweek":
						playerCharacter += tweekRender("defending");
						break;
					case "kenny":
						playerCharacter += kennyRender("defending");
						break;
					default:
						console.log("no match found for " + characters[key].name);
			}
		}
	}
	console.log(characters[who]);
};

//User picks their player
$(".cartmanCard").click( function() {
	makeDefender("cartman");
	playerSelect("cartman");
	console.log(characters["cartman"].isDefending);
	pickedCheck();
});
$(".nathanCard").click( function() {
	makeDefender("nathan");
	playerSelect("nathan");
	pickedCheck();
	});
$(".tweekCard").click( function() {
	makeDefender("tweek");
	playerSelect("tweek");
	pickedCheck();
});
$(".kennyCard").click( function() {
	makeDefender("kenny");
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

