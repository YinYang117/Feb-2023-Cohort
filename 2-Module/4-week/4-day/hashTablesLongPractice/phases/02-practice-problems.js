function anagrams(str1, str2) {
  // Your code here
  if (str1.length !== str2.length) return false;
  const count = {};

  for (const char of str1) {
    if (count[char]) count[char]++;
    else count[char] = 1;
  }

  for (const char of str2) {
    if (count[char]) count[char]--;
    else return false;
  }

  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  const nums = new Set(arr1);

  return arr2.filter(num => nums.has(num));
}


function duplicate(arr) {
  // Your code here
  const seen = new Set();
  for (const int of arr) {
    if (seen.has(int)) return int;
    else seen.add(int)
  }
}


function twoSum(nums, target) {
  // Your code here
  const compliments = new Set();
  for (const num of nums) {
    const comp = target - num;
    if (compliments.has(comp)) return true;
    else compliments.add(num)
  }
  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  const map = {};
  const seen = new Set();
  for (let i = 0; i < pattern.length; i++) {
    // console.log(map)
    const key = pattern[i];
    const val = strings[i];
    // console.log(key, val)
    if (map[key]) {
      if (map[key] !== val) {
        return false;
      } if (map[key] === val) continue;
    }
    else if (seen.has(val)) return false;
    else {
      map[key] = val;
      seen.add(val)
    }
  }
  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];