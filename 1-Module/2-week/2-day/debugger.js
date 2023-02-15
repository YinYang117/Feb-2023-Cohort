// this function should sort letters and numbers
// then return an array
//		with a sub-array of all the letters
//		and another sub-array of all the numbers

function returnInTheLoop(arr){
	for (let i = 0; i < arr.length; i++) {
		let finalArr = [];
		let letterArr = [];
		let numberArr = [];
		let abc = "abc"
		let nums = "123"
		if (abc.includes(arr[i])) {
			letterArr.push(arr[i])
		}
	}
	
	for (let i = 0; i < arr.length; i++) {
		if (nums.includes(arr[i])) {
			let arr[i] = nums[i]
			numberArr.push(arr[i])
		}
		finalArr = letterArr + numberArr
	}
	return finalArr
}

let arr1 = ["a", "1", "b", "c", "2", "3"]
console.log(returnInTheLoop(arr1)) // [ [a, b, c], [1, 2, 3] ]
