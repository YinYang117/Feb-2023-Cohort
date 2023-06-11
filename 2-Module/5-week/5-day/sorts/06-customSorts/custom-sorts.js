function ageSort(users) {
  // Your code here
  return users.sort((a, b) => {
    return a.age - b.age;
  })
}

function oddEvenSort(arr) {
  // arr.sort((a, b) => a - b); 
  // let evensCount = arr.filter(ele => !(ele % 2)).length;
  // // console.log(arr);
  // // console.log(evensCount)
  // for (let i  = 0; i < arr.length; i++){
  //   while (arr[i] % 2 === 0 && evensCount){
  //     evensCount--;
  //     arr.push(...arr.splice(i, 1))
  //   }
  // }
  // return arr;
  return arr.sort((a, b) => {
    //   if (a % 2 === 0 && b % 2 !==0){
    //     return 1;
    //   } else if ((a % 2 !== 0 && b % 2 !== 0) || (a % 2 === 0 && b % 2 === 0)){
    //     return a - b;
    //   } else return -1;
    return (a + b) % 2 === 0 ? a - b : a % 2 === 1 ? -1 : 1
  })
}

function validAnagrams(s, t) {
  let lettersS = s.split("");
  let lettersT = t.split("");
  lettersS.sort();
  lettersT.sort();
  // console.table(lettersS)
  // console.table(lettersT)
  return lettersS.join("") === lettersT.join("");
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    const aLog = parseInt(Math.log10(a));
    const bLog = parseInt(Math.log10(b));
    if (aLog === bLog) return a - b;
    return bLog - aLog;
  })
}

function frequencySort(arr) {
  const count = {};
  for (const num of arr) count[num] ? count[num]++ : count[num] = 1;
  // console.log(arr);
  // console.log(count);
  return arr.sort((a, b)=>{
    if (count[a] === count[b]) return b - a;
    return count[a] - count[b];
  })
}




module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];