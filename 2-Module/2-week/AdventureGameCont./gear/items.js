// let guardgear = new DefaultGear('Steel Helmet', 'Steel Chestplate', 'Steel Leggings', 'Two-handed Greatsword', null, true);


class Gear {
    constructor(name, description, armor = null, quality = null, degradeVal = 10) {
        this.name = name;
        this.description = description;
        this.armor = armor;
        this.quality = quality;
        this.degradeVal = degradeVal;
    }


    degradeAble() {
        if (this.quality === 0) {
            console.log(`Your armor has ${this.quality} armor. Please repair it!`)
        } else {
            this.quality -= this.degradeVal;
            console.log(`Your armor has gone down to ${this.quality}`)
        }
    }

}


let strawHat = new Gear('Straw Hat', 'A hat of Staw!');
let strawShirt = new Gear('Straw Shirt', 'A shirt for farmers!', 0.5, 100)
let strawPants = new Gear('Straw Pants', 'Pants for farming!', 0.5, 100)
// let strawShirt = new Gear('Straw Shirt', 'A shirt for farmers!', 0.5, 50)

module.exports = { strawHat, strawPants, strawShirt, Gear }


// console.log(strawHat)
// console.log(strawShirt)
// // console.log(strawPants)

// strawPants.degradeAble()
// strawPants.degradeAble()
// strawPants.degradeAble()
// strawPants.degradeAble()
// strawPants.degradeAble()
// strawPants.degradeAble()
// strawPants.degradeAble()
// strawPants.degradeAble()
// strawPants.degradeAble()
// strawPants.degradeAble()
// strawPants.degradeAble()

// console.log(strawPants)
// console.log(strawShirt)
