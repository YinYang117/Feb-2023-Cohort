function firstStep(input) {
  return input.split("&")
}

function secondStep(input) {
  return input.map(kvp => {
    return kvp.split("=")
  })
}

function thirdStep(input) {
  return input.map(kvp => {
    return kvp.map(ele => {
      if (ele.includes("+")) return ele.split("+").join(" ")
      else return ele
    })
  })
}

function fourthStep(input) {
  return input.map(([key, value]) => [key, decodeURIComponent(value)])
}

function fifthStep(input) {
  let obj = {}
  input.forEach(arr => {
    obj[arr[0]] = arr[1]
  })
  return obj
}

// username=azure+green&password=password%21
function parseBody(xwwwformUrlEncoded) {
  let arr = firstStep(xwwwformUrlEncoded)
  let kvpArr = secondStep(arr)
  let spcArr = thirdStep(kvpArr)
  let perArr = fourthStep(spcArr)
  let obj = fifthStep(perArr)
  return obj
}

// req.body = reqBody
// .split("&")
// .map((keyValuePair) => keyValuePair.split("="))
// .map(([key, value]) => [key, value.replace(/\+/g, " ")])
// .map(([key, value]) => [key, decodeURIComponent(value)])
// .reduce((acc, [key, value]) => {
//   acc[key] = value;
//   return acc;
// }, {});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};