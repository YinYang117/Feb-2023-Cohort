const { Adventurer } = require('./adventurer');


class Archer extends Adventurer {
    constructor(name, level, health, defaultGear, stamina = 20, arrows = 'wood', skills = {}, range = 60) {
        super(name, level, health, defaultGear);
        this.stamina = stamina;
        this.arrows = arrows;
        this.skills = skills;
        this.range = range;
    }

    addTracking() {
        const preRequisite = (level) => {
            if (level >= 5) {
                return true;
            } else {
                return false;
            }
        }
        const skill = {
            description: 'Allows Archer to see enemy foot prints',
            range: this.range / 2,
        }
        if (preRequisite(this.level)) {
            this.skills.tracking = skill;
            console.log('You have learned: Tracking')
        } else {
            console.log('You do not have the required level to use this skill. You must be level 5 or greater.')
        }
    }
}

// instance name = new Class Name (name)

const ryan = new Archer('ryan',);
//change ryan's name to be capital Ryan

//HELP ME DO THIS HERE :)


// ryan.addTracking(); // thros an error since level is not 5
ryan.levelUp()
ryan.levelUp()
ryan.levelUp()
ryan.addTracking()
// console.log(ryan)
