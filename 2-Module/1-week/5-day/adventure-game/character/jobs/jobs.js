const { DefaultGear } = require('../../gear/default_gear')
const { Gear } = require('../../gear/items')



class Jobs {
    constructor(title, gear, stats, skills, salary) {
        this.title = title;
        this.gear = gear;
        this.stats = stats;
        this.skills = skills;
        this.salary = salary;
    }

    adjustSalary(raise) {
        if (typeof raise === 'number') {
            this.salary += raise
        } else {
            throw new Error('You did not pass in a raise')
        }
    }

    //skills is an array
    addSkill(newSkill) {
        this.skills.push(newSkill)
        console.log(`You have just learned: ${newSkill}`)
    }

    //remove one skill at a time
    removeSkill(oldSkill) {
        let oldSkillIndex = this.skills.indexOf(oldSkill)

        this.skills.splice(oldSkillIndex, 1);
        console.log(`You have just forgotten: ${oldSkill}`);
    }

}




const blackSmithHeadBand = new Gear('Black Smith Headband', 'headband for smithing');
const blackSmithApron = new Gear('Black Smith Apron', 'Apron for smithing');
const hammer = new Gear('Hammer', 'Hammer for smithing');
const blackSmithBoots = new Gear('Black Smith Boots', 'Boots for black smithing!')

const blackSmithLoadOut = new DefaultGear(blackSmithHeadBand, blackSmithApron, blackSmithBoots, hammer, null, false)
const blackSmith = new Jobs('Black Smith', blackSmithLoadOut, 'black smith stats', ['forage', 'gear refinement', 'craft alloy'], 50_000);

module.exports = {
    blackSmith
}
