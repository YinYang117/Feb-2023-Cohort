// This function is trying to push abc into a new array and return
// But when we try to return it, we only get "a"
function returnInTheLoop(arr){
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		let abc = "abc"
		if (abc.includes(arr[i])) {
			newArr.push(arr[i])
		}
	}
	return newArr
}

let arr1 = ["a", "b", "c", "1", "2", "3"]
console.log(returnInTheLoop(arr1)) // [a,b,c]
