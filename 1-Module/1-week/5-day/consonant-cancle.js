/*
take in a sentence
declare vowels
break into array on spaces
create new array to hold onto the altered words
iterate through array // words
	iterate through each word // chars
		if the char is not a vowel, move on
		when we reach a vowel, slice it into altered words.
// should have array with words that start with vowels
join altered words array back into scentence
return
*/

function consonantCancel(sentence) {
    let vowels = "aeiou";
	let wordArr = sentence.split(" ")
	let alteredWords = [];
	// each iteration here is a word
	for (let i = 0; i < wordArr.length; i++) {
		let charArr = wordArr[i].split("");

		// each iteration here is a char of the current word
		for (let j = 0; j < charArr.length; j++) {
			if (vowels.includes(charArr[j])) {
				alteredWords.push(wordArr[i].slice(j))
				break;
			} 
		}
	}
	return alteredWords.join(" ")
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
