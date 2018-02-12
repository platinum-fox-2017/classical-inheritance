class SuperPower {
    constructor(name) {
        this.name = name
    }
    use_laser_vision() {
        console.log(`${this.name} memiliki mata laser`);
    }
    static be_invisible() {
        console.log('Hewan ini bisa menghilang');
    }
}
module.exports = SuperPower