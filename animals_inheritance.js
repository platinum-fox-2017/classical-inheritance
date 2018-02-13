"use strict"

class Animal {
	constructor (num_legs, is_warm_blooded) {
		this._num_legs = num_legs;
		this._is_warm_blooded = is_warm_blooded;
		this.superpower = new SuperPower();
	}
}

class SuperPower {
	use_laser_vision() {
		return "Dor!!";
	}

	be_invisible() {
		return "Clink";
	}
}

class Frog extends Animal {
	constructor () {
		super(4, false);
	}
}

class Bat extends Animal {
	constructor () {
		super(2, true);
	}
}

class Chimpanzee extends Animal {
	constructor () {
		super(2, true);
	}
}

class Fox extends Animal {
	constructor () {
		super(4, true);
	}
}

class Chicken extends Animal {
	constructor () {
		super(2, true);
	}
}

let frog_1 = new Frog();
let bat_1 = new Bat();
let chimpanzee_1 = new Chimpanzee();
let fox_1 = new Fox();
let chicken_1 = new Chicken();

// console.log(frog_1);
// console.log(bat_1);
// console.log(chimpanzee_1);
// console.log(fox_1);
// console.log(chicken_1);

console.log(fox_1.superpower.use_laser_vision());