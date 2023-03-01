let myForEach = (arr, cb) => {
	for (let i = 0; i < arr.length; i++)	{
		if (i % 2 === 0) console.log( arr[i] )
	}
}

let printEvens = (el, i) => {
	if (i % 2 === 0) console.log( arr[i] )
}

let arrMaker = () => {
	let newArr = []
	for (let i = 0; i < 1000000; i++){
		newArr.push(Math.floor(Math.random() * 10))
	}
	return newArr
}

let arr = arrMaker();
console.log(arr)

let time1 = Date.now()
myForEach(arr, printEvens)
let time2 = Date.now()
console.log("timer ", time2 - time1)


arr.forEach(printEvens)
