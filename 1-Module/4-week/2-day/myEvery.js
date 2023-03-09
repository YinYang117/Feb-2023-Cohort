let myEvery = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) return false
	}
	return true
} 

let arr = [[1], [2], [3], [4]]

console.log(myEvery(arr))

let callback = (el) => Array.isArray(el)

console.log(arr.every(callback))
console.log(arr.every( el => Array.isArray(el) ))

