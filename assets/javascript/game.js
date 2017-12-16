$(document).ready( function() { 
	var userHasSelectedCharacter = false;
	var userSelectedOpponent = false;
/*	var characters = {
		cartman: {
			name: "cartman",
			attackStrength: 20,
			counterAttack: 35,
			isDefending: false,
			isAlive: true},
		kenny: {
			name: "kenny",
			attack: 10,
			counterAttack: 40,
			isDefending: false,
			isAlive: true},
		nathan:{
			name: "nathan",
			attack: 25,
			counterAttack: 25,
			isDefending: false,
			isAlive: true},
		tweek: {
			name: "tweek",
			attack: 15,
			counterAttack: 45,
			isDefending: false,
			isAlive: true}
		};*/
	var computerCharactersLeft = 3;
	var usersChoice = "";
	var defendingCharacter = "";
	var baseUserAttack;
	var userHealth;
	var userAttack;
	var computerHealth;
	var computerAttack;

	$(".health").each(function() {
		$(this).html($(this).attr("hp"));
	})

	$(".tile").click( function() {
		if (!userHasSelectedCharacter) {
			$(this).addClass("attacker");
			usersChoice = $(this).attr("name");
			userHasSelectedCharacter = true;
			userHealth = parseInt($("." + usersChoice + "health").attr("hp"));
			userAttack = parseInt($("."+usersChoice).attr("attack"));
			$(".tile").each(function() {
				if (!$(this).hasClass("attacker")) {
					$(this).addClass("enemy");
					$(this).appendTo(".enemiesToAttack");
				}
			})
		}
		if (userHasSelectedCharacter && !userSelectedOpponent) {
			if (!$(this).hasClass("attacker")) {
				$(this).addClass("defender");
				defendingCharacter = $(this).attr("name");
				userSelectedOpponent = true;
				computerAttack = parseInt($("."+defendingCharacter).attr("attack"));
				computerHealth = parseInt($("." + defendingCharacter + "health").attr("hp"));
				$(this).appendTo(".defendingEnemy");
			}
		}
	});
	baseUserAttack = parseInt(userAttack);
	$(".attackButton").click(function attackButton() {
		if (usersChoice !== "" && defendingCharacter !== "") {
			console.log($("."+usersChoice).attr("attack"));
			console.log(userHealth);
			if (userHealth >= 1 && computerHealth >=1){
				computerHealth = computerHealth - userAttack;
				userHealth = userHealth - computerAttack;
				userAttack += baseUserAttack;
				
				$("."+usersChoice+"Health").html(userHealth);
				$("."+defendingCharacter+"Health").html(computerHealth);

				if (userHealth >= 1 && computerHealth <=0 && computerCharactersLeft > 0) {
					userSelectedOpponent = false;
					computerCharactersLeft = computerCharactersLeft - 1;
					$(defendingCharacter).detach();
					$("."+defendingCharacter).css({ 'display': "none" });
					$("."+usersChoice+"Health").html(userHealth);

					if (computerCharactersLeft === 0) {
						$(".attackButton").css({ 'display': "none"});
						$(".tile").css({ 'display': "none"});
						$(".playerOptions").css({ 'display': "none"});
						$(".winPrompt").css({ 'display': "block"});
					}
				
				} else if (userHealth <=0 && computerHealth >=1) {
					$(".attackButton").css({ 'display': "none"});
					$(".tile").css({ 'display': "none"});
					$(".playerOptions").css({ 'display': "none"});
					$(".lossPrompt").css({ 'display': "block"});
				} 
				console.log(usersChoice + " attack: " + userAttack);
				console.log(defendingCharacter + " attack: " + computerAttack);
				console.log(usersChoice + " health:" + userHealth);
				console.log(defendingCharacter + " health:" + computerHealth);
			}
		}
	});
});


