/*
reduce
Given the friends array, use the Array.reduce() method 
to get and print the sum of all the years of friendship 
with all the friends in the array.
*/

let friends = [
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

let totalYears = friends.reduce((acc, friend) => {
	console.log("acc ", acc, "  friend  ", friend)
	return  acc + friend.yearsOfFriendship
}, 0);

console.log(totalYears);     // 19
