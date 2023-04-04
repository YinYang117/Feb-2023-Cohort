const { DefaultGear } = require('../../gear/default_gear')
const { strawHat, strawPants, strawShirt } = require('../../gear/items')
// console.log(DefaultGear)
const { blackSmith } = require('../jobs/jobs')


class Npc {
    constructor(name, description, gear, hasJob = false, job = null) {
        this.name = name;
        this.description = description
        this.gear = gear || new DefaultGear(strawHat, strawShirt, strawPants)
        this.hasJob = hasJob;
        this.job = job;


        this.isTalking = false;
        this.dialogue = {
            'how are you': 'Great Weather?',
            'are you an adventurer': 'I used to be an adventurer like you... but then I took an arrow to the knee.',
            'You look funny': 'You should be completing your quest...'
        }

        // this.gear = new DefaultGear(strawHat, strawShirt, strawPants)
    };

}


const marcus = new Npc('Marcus', 'Warrior', blackSmith.gear, true, blackSmith);
const ryan = new Npc('Ryan', 'Archer', blackSmith.gear, true, blackSmith);


//negative to decrease, positive to increase, a number must be passed
marcus.job.adjustSalary(15_000)

ryan.job.addSkill('Some new skill')

ryan.job.removeSkill('craft alloy')
console.log(ryan)

// console.log(marcus)

module.exports = { marcus }
