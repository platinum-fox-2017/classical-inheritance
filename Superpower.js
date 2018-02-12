class SuperPower {
    constructor(name) {
        this.name = name
        this.use_laser_vision;
    }

    use_laser_vision() {
        return this.name + ' Laser Vision On!'
    }

    be_invisible() {
        return this.name + ' Invisible On!'
    }
}

module.exports = SuperPower