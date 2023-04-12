const readline = require('readline');
// const Wizard = require('./')
const Warrior = require('../character/warrior')
const menu = require('./menu')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




/*   GLOBAL VARIABLES    */
let menuStatus = true;
const user = {
    characterName: '',
    classType: ''
}





console.log('Welcome to Adventure Game')
const setUserName = () => {
    rl.question('What will your character username be?\n\n', (username) => {
        user.characterName = username;
        console.clear()
        setClassType()
    });
}

const setClassType = () => {
    console.log('CLASS SELECTIONS:\n \n')
    console.log('WARRIOR: A strong fighter that excels at close range.\n They love fighting with swords and shields, and have an inherit ability to rage.\n Rage doubles a warriors stamina for 10 seconds to allow for a flurry of attacks and end any fight quickly!')
    console.log('\n\n WIZARD: An intellectual fighter that excels at medium range.\n The arcane arts are their weapon of choice. They have an inherit ability to ____ which ___');
    console.log('\n\nARCHER: An acrobatic long range fighter.\n Using arrows, they love to keep their opponents at a distance.\n They have an inherit ability to ___ which ____ \n\n');

    rl.question('So, what will your character class type be?\n\n', (input) => {
        console.clear()
        user.classType = input.toLowerCase();
        // rl.close();
        if (user.classType === 'warrior') {
            let player = new Warrior(user.characterName);
            console.log(`Welcome, ${user.characterName}`)
            console.log(player)
            setTimeout(() => {
                console.clear();
                //add menu
                console.table(menu);
                readInputs()
            }, 5_000)
        }
    });
}

const readMenuStatus = (menuStatus, menu) => {
    if (menuStatus) {
        console.clear()
        console.table(menu)
    } else {
        console.clear();
    }
}

const readInputs = () => {
    rl.question('', (input) => {
        let option = menu[input];

        if (option === 'show menu') {
            console.clear();
            menuStatus = true;
            console.table(menu);
        } else if (option === 'close menu') {
            console.clear();
            menuStatus = false;
        } else if (option === 'see spells') {
            //todo: add spells
            readMenuStatus(menuStatus, menu);
            console.log([])
        } else if (option === 'see gear') {
            //todo: add gear
            readMenuStatus(menuStatus, menu);
            console.log({})
        } else if (option === 'see stats') {
            //todo: add stats
            readMenuStatus(menuStatus, menu);
            console.log({})
        } else {
            readMenuStatus(menuStatus, menu);
            console.log('You did not select a menu option');
        }
        readInputs()
    })
}

console.clear()
setUserName();

module.export = {
    user
}
