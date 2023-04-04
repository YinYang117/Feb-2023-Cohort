
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




function testMe() {
  console.log(this); //
}

testMe(); 
