let newDay = new Date()
console.log(newDay)


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
// 	  total += 1;
// 	}
  
// 	return total;
//   }


