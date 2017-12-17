$(document).ready( function() { 
	var userHasSelectedCharacter = false;
	var userSelectedOpponent = false;
	var characters = {
	cartman: {
			name: "cartman",
			attack: 10,
			health: 200,
			counterAttack: 45,
			isDefending: false,
			isAlive: true},
	kenny: {
			name: "kenny",
			attack: 10,
			health: 250,
			counterAttack: 40,
			isDefending: false,
			isAlive: true},
	nathan: {
		 	name: "nathan",
			attack: 15,
			health: 225,
			counterAttack: 30,
			isDefending: false,
			isAlive: true},
	tweek: {
			name: "tweek",
			attack: 25,
			health: 150,
			counterAttack: 45,
			isDefending: false,
			isAlive: true}
		};
	var computerCharactersLeft = 3;
	var usersChoice = "";
	var defendingCharacter = "";
	var baseUserAttack;
	var userHealth;
	var userAttack;
	var computerHealth;
	var computerAttack;
	var firstAttack = false;

	$(".health").each(function() {
		$(this).html($(this).attr("hp"));
	})

	$(".tile").click( function() {
		if (!userHasSelectedCharacter) {
			$(this).addClass("attacker");
			usersChoiceObject = characters[$(this).attr("name")];
			usersChoice = $(this).attr("name");
			userHasSelectedCharacter = true;
			userHealth = parseInt(usersChoiceObject.health);
			userAttack = parseInt(usersChoiceObject.attack);
			baseUserAttack = userAttack;
			$(".userCurrentAttack").html(usersChoice + "'s current attack: " + userAttack);
			$(".playerOptions").html("Choose an opponent");
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
				defendingCharacter = $(this).attr("name")
				defendingCharacterObject = characters[$(this).attr("name")];
				userSelectedOpponent = true;
				computerAttack = parseInt(defendingCharacterObject.attack);
				computerHealth = parseInt(defendingCharacterObject.health);
				$(".computerCounterAttack").html(defendingCharacter + "'s counter attack: " + computerAttack);
				$(this).appendTo(".defendingEnemy");
				$(".playerOptions").html("Attack " + defendingCharacter + "!");
			}
		}
	});
	$(".restartButton").click(function restartButton(){
		location.reload();
	});

	$(".attackButton").click(function attackButton() {
		
		if (usersChoice !== "" && defendingCharacter !== "") {
			if (userHealth >= 1 && computerHealth >=1){
				computerHealth = computerHealth - userAttack;
				userHealth = userHealth - computerAttack;
				if (firstAttack) {
					firstAttack = false;
					userAttack = baseUserAttack;
				} else {
					userAttack += baseUserAttack;	
				}		
				$("."+usersChoice+"Health").html(userHealth);
				$("."+defendingCharacter+"Health").html(computerHealth);

				if (userHealth >= 1 && computerHealth <=0 && computerCharactersLeft > 0) {
					userSelectedOpponent = false;
					computerCharactersLeft = computerCharactersLeft - 1;
					$(defendingCharacter).detach();
					$("."+defendingCharacter).css({ 'display': "none" });
					$(".playerOptions").html(defendingCharacter + " was defeated. Choose another opponent.");
					$("."+usersChoice+"Health").html(userHealth);

					if (computerCharactersLeft === 0) {
						$(".attackButton").css({ 'display': "none"});
						$(".tile").css({ 'display': "none"});
						$(".playerOptions").css({ 'display': "none"});
						$(".winPrompt").css({ 'display': "block"});
					}
				
				} else if (userHealth <= 0 || computerHealth <=0) {
					$(".attackButton").css({ 'display': "none"});
					$(".tile").css({ 'display': "none"});
					$(".playerOptions").css({ 'display': "none"});
					$(".lossPrompt").css({ 'display': "block"});
				} 
				$(".userCurrentAttack").html(usersChoice + "'s current attack: " + userAttack);
				$(".computerCounterAttack").html(defendingCharacter + "'s counter attack: " + computerAttack);	
			}
		}
	});
});


