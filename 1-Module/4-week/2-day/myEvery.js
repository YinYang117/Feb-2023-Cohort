let myEvery = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		console.log(i)
		if (!(typeof arr[i] === "number")) return false
	}
	return true
}

let arr = ["nope", 1, 2, 3]
let arr2 = [1, 2, 3]
console.log(myEvery(arr)) // false
console.log(myEvery(arr2)) // true
