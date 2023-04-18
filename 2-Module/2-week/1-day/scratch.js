function hello() {
	console.log(`Hello ${this.firstName}`);
  }
  
let catObj = {
	"firstName": "Im a cat",
	"func": hello
}

catObj.func()

// class Cat {
// 	purr() {
// 	  console.log("meow");
// 	}
  
// 	purrMore() {
// 	  this.purr();
// 	}
//   }
//   cat = new Cat();
//   i = 1

//   global.setTimeout(cat.purrMore, 1000);  // 5 sec later: TypeError: this.purr
// 										  // is not a function


// function testMe() {
// 	console.log(this); //
//   }
// testMe(); // Object [global] {global: [Circular], etc.}

// class Cat {
// 	constructor() {
// 		this.name = "hi there"
// 	}
// 	purr() {
// 	  console.log("meow");
// 	}
// 	purrMore() {
// 	  this.purr();
// 	}
// 	whatAmI() {
// 		console.log(this)
// 	} 
//   }

//   let cat = new Cat();
//   cat.whatAmI()
//   let cat2 = new Cat();
//   cat2.whatAmI()


// class Dog {
// 	test() {
// 	  return this === dog;
// 	}
//   }
//   let dog = new Dog();
//   let dog2 = new Dog();
  
// console.log(dog.test()); // prints `true`
// console.log(dog2.test()) // T or F


// class Test {
//   testFunc() {
//     debugger;
//     console.log(this)
//     console.log(`this is equal to test1: ${this === test1}`);
//   }
// }

// // const test1 = new Test();
// // Calling the method on the instance
// test1.testFunc(); // true
// // Calling the method outside the class
// const test1Func = test1.testFunc; 
// test1Func(); // false
// // Calling the method as a callback
// setTimeout(test1.testFunc, 1000); // false

// // Using this in Function Declaration Syntax
// function someFunc() {
//   console.log(this);
// }
// someFunc(); // Global Object
