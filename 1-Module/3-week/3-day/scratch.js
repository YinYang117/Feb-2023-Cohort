// let obj = {}


// obj['something'] = 'some value'

// console.log(obj)

// let test = 'something'

// console.log(obj[test])

// let string = 'apple'
// let obj = {};



function buildObj(obj) {
    let stringArr = string.split('');
    for (let i = 0; i < stringArr.length; i++) {
        let char = stringArr[i];

        if (obj[char] !== undefined) {
            obj[char]++

        } else {
            obj[char] = 1

        }


    }

    return obj

}

buildObj(obj);

//{ a: 1, p: 2, l: 1, e: 1 }

function getMaxCount(obj) {
    let max = 0;
    let char = undefined;

    for (let key in obj) {
        console.log(values, "     <-----this is the key")
        let value = obj[key];
        // console.log(value);
        if (value > max) {
            max = value;
            char = key;
        }
    }
    return char

}


// console.log(getMaxCount(obj))




// let arr = ['a','p','p','l','e']
// console.log(arr[2])


// let spiderMan = {
//     realName: 'Peter Parker',
//     superName: 'Spider-Man',
//     hasParents: false,
//     numberOfFriends: 2,
//     powers: ['web-sling', 'super strength', 'wall climb'],
//     printSlogan: () => 'With great power comes great responsibilities',
//     mentor: {
//         realName: 'Tony Stark',
//         superName: 'Iron Man',
//         powers: ['super smart', 'super rich'],
//         printSlogan: () => 'I am Iron Man'
//     }
// }


// let apple = {
//     a: 1,
//     p: 2,
//     l: 1,
//     e: 1
// }

// let keysArr = Object.keys(apple) //returns an arr of keys
// let valsArr = Object.values(apple) //retyrbs an arr
// // let bothArr = Object.entries(apple)
// // console.log(bothArr[0][1])

// ['a', 1, true]
