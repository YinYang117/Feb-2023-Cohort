let myMap = (arr) => {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		let el = arr[i]
		newArr.push(el *= 2)
	}
	return newArr
}


let arr = [1, 2, 5]

console.log(myMap(arr)) // 2, 4, 10
