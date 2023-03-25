const { defaultGear } = require('../gear/default_gear')
const random = require('getrandomjs')
const readline = require('readline');
const { marcus } = require('./npcs/npcs')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



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

    talkToNpc(npc) {
        //see what dialogue has available,
        let id = 1;
        npc.isTalking = true;
        const options = Object.keys(npc.dialogue);
        //print out the questions that cause npc to respond
        options.forEach(option => {
            console.log(`Select ${id}: ${option}`)
            id++
        });

        // allow player to select one of the options
        rl.question('\n', (input) => {
            let numRes = Number(input)
            if (numRes === 1) {
                console.log(npc.dialogue['how are you'])
            } else if (numRes === 2) {
                console.log(npc.dialogue['are you an adventurer'])
            } else if (numRes === 3) {
                console.log(npc.dialogue['You look funny'])
            }
            rl.close();
            npc.isTalking = false;
        })
        // have npc print out their response to the question/input


    }


}


// const ryan = new Adventurer('ryan')
const anthony = new Adventurer('anthony')

anthony.talkToNpc(marcus)

module.exports = Adventurer
