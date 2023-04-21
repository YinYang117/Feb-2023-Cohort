function anagrams(str1, str2) {
  // Your code here
  if (str1.length !== str2.length) return false;
  const count = {};
  for (const char of str1) char === " " ? null : count[char] ? count[char]++ : count[char] = 1
  for (const char of str2) {
    if (count[char]) count[char]--
    else return false;
  }
  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  const set = new Set(arr1)
  return arr2.filter(ele => set.has(ele));
}


function duplicate(arr) {
  // Your code here
  const seen = new Set();
  for (const int of arr) {
    if (seen.has(int)) return int;
    seen.add(int)
  }
}


function twoSum(nums, target) {
  // Your code here
  const compliments = new Set();
  for (const num of nums) {
    const comp = target - num;
    if (compliments.has(comp)) return true;
    compliments.add(num)
  }
  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  const map = {};
  const seen = new Set();
  for (let i = 0; i < pattern.length; i++) {
    const key = pattern[i];
    const val = strings[i];
    if (map[key]) {
      if (map[key] !== val) return false;
    } else {
      if (seen.has(val)) return false;
      seen.add(val)
      map[key] = val
    }
  }
  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];