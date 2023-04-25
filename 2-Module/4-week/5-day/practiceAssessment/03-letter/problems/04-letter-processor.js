/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterRoom` class found in the `./problems/03-letter-room.js` file.


The final class is called `LetterProcessor`. `LetterProcessor` should be
initialized with a maximum amount of letters in can add in a bin,
`maxLettersPerBin`. Each instance should have its own `LetterRoom`. Implement
the method to add a letter to last `LetterBin` added to its `LetterRoom`. The
letter should be added to the top of that `LetterBin`'s stack.
Implement the method to remove a letter from the first `LetterBin` added to
`LetterProcessor`'s `LetterRoom`. The letter should be removed from the top of
that `LetterBin`'s stack.

******************************************/

const LetterRoom = require("./03-letter-room");

class LetterProcessor {
    constructor(maxLettersPerBin=4) { // test spec omits a value for new LetterProcessor, adding default value passes spec
        this.letterRoom = new LetterRoom();
        this.maxLettersPerBin = maxLettersPerBin;
    }

    addLetter(message) {
        // add a letter with the specified message to the last bin added to the letter room
        // if the last bin added is full, add a new bin to the letter room
        // Your code here
        let currentBin = this.letterRoom.getLastBin(); // get last bin in queue
        if (!currentBin) currentBin = this.letterRoom.addBin(); // if no last bin, add one
        if (currentBin.numLetters() < this.maxLettersPerBin) currentBin.addLetter(message); // if there's room, add letter to bin
        else this.letterRoom.addBin().addLetter(message) // if not, add new bin and add letter to that bin
    }

    removeLetter() {
        // remove a letter from the first bin added to the letter room
        // if the first bin is empty after removing the letter, remove the bin from the letter room
        // if there are no more letters, then console.log 'No more letters to process!'
        // Your code here
        const firstBin = this.letterRoom.getFirstBin(); // get the first bin
        if (!firstBin) return console.log("No more letters to process!") // if there isn't a bin, print message
        const letter = firstBin.removeLetter(); // remove a letter from the stack
        if (!firstBin.numLetters()) this.letterRoom.removeBin(); // if there are no letters left in the bin, remove it
        return letter; // return the letter
    }
}

module.exports = LetterProcessor;