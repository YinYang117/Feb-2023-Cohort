// let arr = [];
// for (let n = 0 ; n <= 1000000000000 ; n++) {
//   arr.push(n);
// }

// class NameError extends Error {
// 	constructor(name = null, ...params) {
// 	  super(...params);
  
// 	  if (Error.captureStackTrace) {
// 		Error.captureStackTrace(this, NameError);
// 	  }
  
// 	  this.name = 'NameError';
// 	  this.message = this.message || `There was a problem with the name '${name}'`;
// 	}
//   }
  
//   try {
// 	const name = 5;
// 	if (typeof name !== 'string') {
// 	  throw new NameError('Name cannot be a string');
// 	}
//   } catch(e) {
// 	console.log(e);
//   }


// function constantLoop(n) {
//     let total = 0;
//     for (let i = 1; i <= 100; i++) {
//         total += i
//     }
//     return total;
// }

// function forLoop(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }


// function nestedLoop(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             total += i
//         }
//     }
//     return total;
// }

// function doubleNestedLoop(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             for (let k = 1; k <= n; k++)
//                 total += i
//         }
//     }
//     return total;
// }


// let increment = 100;
// for (let n = increment; n <= increment * 100; n += increment) {
//     let startTime = Date.now();
//     constantLoop(n)
//     forLoop(n);
//     nestedLoop(n);
//     doubleNestedLoop(n);
//     let endTime = Date.now();
//     console.log("".concat(endTime - startTime));
// }

// let pushTimer = (arr, ...thingsToPush) => {
// 	arr.push(...thingsToPush)
// 	return arr
// }
// let bunchOfNumbers = () => {
// 	let newArr = []
// 	for (let i = 0; i < 10000; i++) newArr.push(i)
// 	return newArr
// }
// let nums = bunchOfNumbers()
// console.time("timer1")
// console.log(pushTimer([0], ...nums));
// console.timeEnd("timer1")

// console.log(`Runtime: ${endTime - startTime}ms`);



// function increaseByOneInPlace(nums) {
// debugger
//     for (let i = 0 ; i < nums.length ; i++) {
//         nums[i]++;
//     }

//     let res = nums.map((num) => {
// 		debugger
// 		return num++
// 	});

// 	return res
// }

// console.log(global)
// console.log(increaseByOneInPlace([1, 2, 3]))


// function catPair(n) {
//     let pairs = [];
//     for (let i = 0 ; i < n ; i++) {
//   	  for (let j = 0 ; j < n ; j++) {
//         		pairs.push([i, j]);
//   	  }
//     }
//     return pairs;
// }


// console.log(catPair(150000))


// function getNumPairsList(n) {
//     let pairs = [];

//     for (let i = 0 ; i < n ; i++) {
//         for (let j = 0 ; j < n ; j++) {
//             pairs.push([i, j]);
//         }
//     }

//     return pairs;
// }

// console.log(getNumPairsList(1000))

// function addNums(arr) {
// 	let newArr = []
// 	console.log("hi")
//     for (let i = 0 ; i < arr.length ; i++) {
//         newArr.push(arr[i] + 1);
//     }
//     return newArr;
// }

// console.log(addNums([1,2,3,4,5]))

// function addManyNums(n) {

// 	let total = 0;
  
// 	for (let i = 0 ; i < n ; i++) {
// 		for (let j = 0; j < i; j++) {
// 			for (let k = 0; k < j; k++) {
// 				total += k;
// 			}
// 		}
// 	}
  
// 	return total;
//   }

// function addTwoNums(num1, num2) {

// 	let total = 0;
  
// 	for (let i = 0 ; i < num1 ; i++) {
// 	  total += 1;    
// 	}

// 	for (let i = 0 ; i < num2 ; i++) {
// 		total += 1;
// 	}

// 	return total;
//   }

//   startTime = Date.now();
//   addTwoNums(12345678900, 12345678900);
//   endTime = Date.now();
  
//   console.log(`Runtime: ${endTime - startTime}ms`); 
