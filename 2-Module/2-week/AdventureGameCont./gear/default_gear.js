const defaultGear = {
    head: null,
    torso: 'shirt',
    legs: 'pants',
    mainHand: null,
    offHand: null,
    twohanded: false
}


class DefaultGear {
    constructor(head, torso, legs, mainHand, offHand, twohanded) {
        this.head = head || null;
        this.torso = torso || 'red shirt';
        this.legs = legs || 'black pants';
        this.mainHand = mainHand || null;
        this.offHand = offHand || null;
        this.twohanded = twohanded || false
    }
}

let guardgear = new DefaultGear('Steel Helmet', 'Steel Chestplate', 'Steel Leggings', 'Two-handed Greatsword', null, true);

// console.log(guardgear)



module.exports = { defaultGear, DefaultGear };
