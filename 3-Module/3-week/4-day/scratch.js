function restReduce(...otherNums) {
	let res = otherNums.reduce((acc, num) => 
		acc += num
	);
	return res;
  }
  console.log(restReduce(1, 5, 7, 32));
