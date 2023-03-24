const Adventurer = require('./adventurer');

// console.log(Adventurer)

class Warrior extends Adventurer {
    constructor(name, stamina = 10, shield = false, level, health, gear, rage = false) {
        super(name, level, health, gear)
        this.stamina = stamina;
        this.shield = shield;
        this.rage = rage;
    }

    equipShield(shield) {
        //already have shield equipped
        if (this.shield === true) {
            this.gear.offHand = null;
            this.shield = false;
            console.log('You have now taken off your shield')
            //you dont have it equipped
        } else {
            this.gear.offHand = shield
            this.shield = true;
            console.log('You have now put your shield on')
        }
    }

    activateRage() {
        if (this.rage === true) {
            this.rage = false;
        } else {
            this.stamina *= 2
            let count = 10;
            this.rage = true;
            console.clear()
            setTimeout(() => this.activateRage(), 10_000)
            let countDownRage = setInterval(() => {
                console.clear()
                console.log('you are currently in rage mode for 10 seconds!')
                console.log('')
                if (count === 1) {
                    console.log(`Rage is active for ${count} second`);
                } else {
                    console.log(`Rage is active for ${count} seconds`);
                }
                count--;
                if (count === 0) {
                    console.log('You have run out of rage')
                    clearInterval(countDownRage)
                }
            }, 1000)
        }
    }

}


// const milo = new Warrior('Milo')
// milo.equipShield('Buckler Shield')
// // console.log(milo)
// milo.equipShield()
// // console.log(milo)

// milo.activateRage()
module.exports = Warrior;
