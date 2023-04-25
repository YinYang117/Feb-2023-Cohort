function binaryToString(binaryBlob) {
  // Your code here
  let str = "";
  for (let i  = 0; i < binaryBlob.length; i+=8){
    let slice = binaryBlob.slice(i, i+8);
    const int = parseInt(slice, 2)
    str += String.fromCharCode(int)
  }
  return str;
}

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;