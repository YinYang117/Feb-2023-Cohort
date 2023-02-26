/*
Map

Given the array friends below, use the Array.map() method to map the
current array to an array of booleans representing whether or not the friend
has been friends with the user for more than 5 years. Then print the newly
mapped array.
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

let goodFriendsOrNot = friends.map(friend => {
    if (friend.yearsOfFriendship > 5) {
		return true
	}
	else return false
});

let goodFriendsOrNot2 = friends.map(friend => {
	return friend.yearsOfFriendship > 5
});

console.log(goodFriendsOrNot);          // [false, false, true, true];

console.log(goodFriendsOrNot2); 

