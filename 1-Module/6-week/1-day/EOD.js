/*

Create a function that will take in a word.
It will seemingly animate the word to make it look like it is sliding
to the right and then disappearing one character at a time.


If the word is 20+ characters, just have it disappear to the right.


If it is less, we need to slowly move it to the hidden curtain existing at length 20




TIPS:
- Use recursion to easily control the message queue
- Use console.clear() to clean up the terminal as needed
- Use around 100-200 ms per stack to make a smooth transition
- Use String.endsWith() to check when the word is fully gone

*/


let randomWord = '😃';
let collapse = false;

function animateWord(word) {
    //base case if the word has grown or is at least 20 chars long, stop recursion
    if (word.length === 80) return word;
    // start disappearing when we have a word of 19 characters or more
    if (word.length >= 19) {
        collapse = true;
    }
    //this recursive step will seeminly make our word disappear
    if (collapse) {
        console.log(word);
        setTimeout(() => {
            let newWord = ' ' + word.slice(0, word.length - 2);
            if (newWord.endsWith('                   ')) {
                console.clear();
                return word;
            } else {
                console.clear();
                return animateWord(newWord);
            }
        }, 200)
    }
    // this recursive step will grow our word to the right
    if (!collapse) {
        console.log(word)
        setTimeout(() => {
            let newWord = ' ' + word;
            console.clear();
            return animateWord(newWord)
        }, 200)
    }

}



animateWord(randomWord);
