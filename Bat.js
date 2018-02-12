const Animal = require('./animals_inheritance');

class Bat extends Animal {
    constructor(name) {
        super()
        this.name = name
    }

    set warmBlood(blood) {
        this.is_warm_blooded = blood
    }
}

batman = new Bat('Batman')
batman.warmBlood = 'No'
console.log(batman)