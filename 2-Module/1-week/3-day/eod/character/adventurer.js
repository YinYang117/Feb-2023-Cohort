const defaultGear = require('../gear/default_gear')
const random = require('getrandomjs')


//dont forget to npm install :)

class Adventurer {
    constructor(name, level = 3, health = 10, gear = defaultGear) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.gear = gear;
    }

    //instance methods
    changeName(newName) {
        this.name = newName;
    }

    //level up function that levels up one instance of a char

    powerUp() {
        this.level++;
        let newHealth = random(1, 5)
        this.health += newHealth;
    }


}


// const ryan = new Adventurer('ryan')
// const anthony = new Adventurer('anthony')

module.exports = Adventurer
