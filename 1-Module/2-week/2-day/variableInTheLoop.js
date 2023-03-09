// This function is trying to create a new array in the loop
// But when we try to return it, we get a reference Error

function variableInTheLoop(arr){
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i])
	}
	return newArr
}

let arr1 = ["a", "b", "c", "1", "2", "3"]
console.log(variableInTheLoop(arr1)) // [ 'a', 'b', 'c', '1', '2', '3' ]
