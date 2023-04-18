const Adventurer = require('./adventurer');



class Wizard extends Adventurer {

    static WizardCount = 0;

    constructor(name, spells, level, health, gear,
        recoveryTime = 2000, mana = 50) {
        super(name, level, health, gear)
        this.spells = spells;
        this.recoveryTime = recoveryTime;
        this.mana = mana;
        this.temporayMana = this.mana

        Wizard.increaseWizardCount()
    }

    castSpell(spell) {
        if ((this.spells.includes(spell)) && this.temporayMana >= 10) {
            console.log(`${this.name} casts: ${spell}`)
            this.temporayMana -= 10;
            this.recoverMana()
        } else {
            console.log(`You have not learned ${spell} yet!`)
        }
    }

    recoverMana() {
        if (this.temporayMana === this.mana) {
            return;
        } else {
            let tickTime = (this.recoveryTime / 4)
            let recoverInterval = setInterval(() => {
                if (this.temporayMana === this.mana) {
                    console.log('your mana has recovered')
                    clearInterval(recoverInterval);
                } else {
                    this.temporayMana += 2
                }
            }, tickTime)
        }
    }

    static increaseWizardCount() {
        this.WizardCount++
        console.log(`There are currently ${this.WizardCount} wizards`)
    }


}


const devin = new Wizard('devin', ['fireball'])
const manuel = new Wizard('manuel', ['fireball'])
const jerry = new Wizard('jerry', ['fireball'])
console.log(devin)
devin.castSpell('fireball')
console.log(devin)
// Wizard.increaseWizardCount()
