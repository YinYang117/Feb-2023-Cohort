myFilter = (arr) => {
	let res = []
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			res.push(arr[i])
		} 
	}
	return res
}

myCallbackFilter = (el) => Array.isArray(el)

let arr = [
	["test"],
	[1, 2, 3],
	"hello world",
	{car: "mustang"}
]

let resultOfFunction = arr.filter( myCallbackFilter )

// let resultOfFunction = myFilter(arr) 
console.log(resultOfFunction) // [ ["test"], [1, 2, 3] ]
arr[0][0] = "Ive been changed!!!"
console.log(resultOfFunction) // [ ["Ive been changed!!!"], [1, 2, 3] ]

