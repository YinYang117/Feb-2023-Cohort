// const myForEach = (arr, cb) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		cb(arr[i])
// 	}
// }

let arr = [ 1, "a", 2, "b", "c", 3]


let myCallback = function (el, index, arr) {
	// console.log("arr before ", arr)
	// console.log("el ", el, " and index??? ", index)
	if (typeof el === "number") {
		arr.pop()
		// console.log("popped something")
	}
}




arr.forEach( myCallback )

// myForEach(arr, myCallback())
