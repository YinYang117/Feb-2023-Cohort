const Adventurer = require('./adventurer');


class Wizard extends Adventurer {
    constructor(
        name,
        level,
        health,
        gear,
        spells,
        recoveryTime = 2000,
        mana = 50) {
        super(name, level, health, gear)
        this.spells = spells;
        this.recoveryTime = recoveryTime;
        this.mana = mana;
    }
}


const devin = new Wizard('devin', undefined, undefined, undefined, ['fireball'])
console.log(devin)
