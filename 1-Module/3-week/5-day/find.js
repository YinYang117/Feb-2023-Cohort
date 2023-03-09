/*
find
In this exercise, you will learn to use the Array.find() method which will be
useful to know. The Array.find() method accepts a callback function that
specifies the "find" condition(s) and returns the first element that satisfies
the condition(s).

Given the friends array below, use the Array.find() method 
to get the first friend whose name contains 3 or more vowels and print their name.
*/

const friends = [
    {
        name: "Albert",
        yearsOfFriendship: 3
    },
    {
        name: "Angela",
        yearsOfFriendship: 2
    },
    {
        name: "Freddy",
        yearsOfFriendship: 8
    },
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];

// Hint: create an array of vowels to use in your solution.
const threeVowelFriend = friends.find(friend => {
    let vowels = "aeiouAEIOU"
	let count = 0
	let name = friend["name"]
	let lowerName = name.toLowerCase()
	let lowerArrName = lowerName.split("")
	lowerArrName.forEach(char => {
		if (vowels.includes(char)) count++
	})
	if (count >= 3) return friend
});

console.log(threeVowelFriend.name);             // Angela
