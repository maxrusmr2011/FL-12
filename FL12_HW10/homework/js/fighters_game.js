function Fighter (obj) {
	const name=obj.name, damage = obj.damage, strength = obj.strength,
			agility = obj.agility, hpTotal = obj.hp;
	let hpCurrent = obj.hp, wins = 0, losses = 0;
	this.getName = function () {
		return name;
	}
	this.getDamage = function () {
		return damage;
	}
	this.getStrength = function () {
		return strength;
	}
	this.getAgility = function () {
		return agility;
	}
	this.getHealth = function () {
		return hpCurrent;
	}
	this.attack = function (enemy) {
		const PERCENT = 100;
		if (Math.ceil(Math.random() * PERCENT) < 
				PERCENT - (enemy.getStrength() + enemy.getAgility() ) ) {
			enemy.dealDamage(damage);
			console.log(`${name} makes ${damage} damage to ${enemy.getName()}`);
		} else {
			console.log(`${name} attack missed`);
		}
	}
	this.logCombatHistory = function () {
		console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
	}
	this.heal = function (addHealth) {
		hpCurrent = hpCurrent + addHealth > hpTotal ? hpTotal : hpCurrent + addHealth;
	}
	this.dealDamage = function (damegeFromEnemy) {
		const MIN_HP = 0;
		hpCurrent = hpCurrent - damegeFromEnemy < MIN_HP ? MIN_HP : hpCurrent - damegeFromEnemy;
	}
	this.addWin = function () {
		wins++;
	}
	this.addLoss = function () {
		losses++;
	}	
}
function battle (first, second) {
	let odd = Math.round(Math.random()), fighter, defender;
	if (!first.getHealth()) {
		console.log(`${first.getName()} is dead and can't fight.`);
	} else if (!second.getHealth()) {
		console.log(`${second.getName()} is dead and can't fight.`);
	} else {
		do {
			odd = !odd;
			fighter = odd ? first : second;
			defender = odd ? second : first;
			fighter.attack(defender);
		} while(defender.getHealth())
		console.log(`${fighter.getName()} has won!`);
		fighter.addWin();
		defender.addLoss();
	}
}
