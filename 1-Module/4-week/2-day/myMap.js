let myMap = (arr, callback) => {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		let newElement = callback(arr[i])
		newArr.push(newElement)
	}
	return newArr
}

let multiply = (el, index, arr) => {
	console.log("el ", el, " and index is ", index, arr)
	return el * 2
}

let arr = [1, 22, 34, 4] // => 1, 2, 3, 4

// let res = myMap(arr, multiply)
let resMap = arr.map(num => num*2)
let resMap2 = arr.map(multiply)

// console.log("first  ",res) // 2, 4, 6, 8
// console.log("resmap  ",resMap) // 2, 4, 6, 8
console.log("resmap2  ",resMap2) // 2, 4, 6, 8
// console.log("second  ",arr) // arr => 1, 2, 3, 4
