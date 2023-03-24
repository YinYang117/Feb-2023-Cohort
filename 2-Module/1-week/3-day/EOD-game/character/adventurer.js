const defaultGear = require('../gear/default_gear')


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
    //instance method to change level, add a pay wall
    levelUp(levelTo) {
        if (levelTo !== undefined) {
            this.health += ((levelTo - this.level) * 2)
            this.level = levelTo;
        } else {
            this.health += 2;
            this.level++;
        }
        console.log(`Congrats! You have reached level ${this.level}!`)
    }

}



const ryan = new Adventurer('ryan');
const anthony = new Adventurer('Anthony');
// console.log(ryan)
// ryan.changeName('Ryan');
// // console.log(ryan)
// // console.log(anthony)
// ryan.levelUp(5);
// anthony.levelUp();
// anthony.levelUp();
// console.log(anthony, ryan)
// for(let i = 0; i < )

// console.log(ryan)

module.exports = Adventurer;
