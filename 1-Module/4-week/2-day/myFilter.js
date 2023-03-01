let myFilter = (arr) => {
	let filtered = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) filtered.push(arr[i])
	}
	return filtered
}

let arr = [2, 22, 1000, -1, 1, 3]
let arr2 = ["hehehe"]

let isEven = (el, i, array) => {
	console.log(array[i])
	return el % 2 === 0
}

// let res = myFilter(arr)

// console.log(res) // 2, 22, 1000

let builtInFilter = arr.filter(num => num % 2 === 0)
let builtInFilter2 = arr.filter(isEven)

console.log(builtInFilter) // 2, 22, 1000
console.log(builtInFilter2) // 2, 22, 1000
