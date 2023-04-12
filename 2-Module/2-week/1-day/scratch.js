
let strictFunc = () =>{
  "use strict"
  for (let i = 0; i < 10; i++) {
    
  }
}

let strictFunc2 = () =>{
  for (i = 0; i < 10; i++) {
    
  }
}

strictFunc()
strictFunc2()

// class Cat {
//   purr() {
//     console.log("meow");
//   }

//   purrMore() {
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
//     this.purr();
//   }
// }
// let cat = new Cat();

// global.setTimeout(cat.purrMore, 1000);  // 5 sec later: TypeError: this.purr
//                                         // is not a function


// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   changeName() {
//     this.name = "Layla";
//   }
// }

// let dog = new Dog("Bowser");

// // Note this is **not invoked** - you are assigning the function itself
// let change = dog.changeName;
// console.log(change()); // TypeError, due to not recognizing a valid context

// // Your dog still has the same name!
// console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }



// // class Cat {
// //   purr() {
// //     console.log("meow");
// //   }

// //   purrMore() {
// //     this.purr();
// //   }

// //   whatIsThis() {
// //     console.log(this)
// //   }
// // }
// // let cat = new Cat();

// let thisFunc = cat.whatIsThis;

// // let frankenstein = {
// //   frankFunc: thisFunc,
// // }

// // frankenstein.frankFunc()




// function testMe() {
//   console.log(this); //
// }

// testMe(); 
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
