// this function should sort letters and numbers
// then return an array
//		with a sub-array of all the letters
//		and another sub-array of all the numbers

function returnInTheLoop(arr){
	let nums = "123";
	let abc = "abc";
	let letterArr = [];
	let numberArr = [];
	let finalArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (abc.includes(arr[i])) {
			letterArr.push(arr[i]);
		};
	};
	for (let j = 0; j < arr.length; j++) { // change to j???
		if (nums.includes(arr[j])) {
			numberArr.push(arr[j]);
		};
	};
	finalArr.push(letterArr, numberArr)
	return finalArr;
};

let arr1 = ["a", "1", "b", "c", "2", "3"]
console.log(returnInTheLoop(arr1)) // [ [a, b, c], [1, 2, 3] ]
