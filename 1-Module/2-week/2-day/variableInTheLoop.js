// This function is trying to create a new variable in the loop
// But when we try to return it, we get a reference Error

function variableInTheLoop(arr){
	for (let i = 0; i < arr.length; i++) {
		let newArr = [];
		newArr.push(arr[i])
	}
	return newArr
}

let arr1 = ["a", "b", "c", "1", "2", "3"]
console.log(variableInTheLoop(arr1)) //abc123
