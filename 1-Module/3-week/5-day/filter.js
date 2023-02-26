/*
filter
Given the array friends below, 
use the Array.filter() method to filter the array 
to only contain friends whose name starts with an "A" 
and who has been friends for over 5 years. 
Then print the filtered array.
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
		name: "Freddy-Andy",
		yearsOfFriendship: 8
	},
	{
		name: "Agatha",
		yearsOfFriendship: 6
	}
];

const filteredResult = friends.filter(objectOfFriend => {
	if (objectOfFriend.name[0] === "A" && objectOfFriend.yearsOfFriendship > 5) {
		return objectOfFriend
	}
})

const filteredResult2 = friends.filter(objectOfFriend => {
	if (objectOfFriend.name.includes("A") && objectOfFriend.yearsOfFriendship > 5) { //includes gives false positive
		return objectOfFriend
	}
})

console.log(filteredResult);
console.log(filteredResult2);
/*
Should print:
[ {name: "Agatha", yearsOfFriendship: 6} ];
*/
