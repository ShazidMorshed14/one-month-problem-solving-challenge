var findDuplicates = function (nums) {
  let hash = {};

  nums.forEach((element, index) => {
    if (hash.hasOwnProperty(element)) {
      // Increment the value when the element is found again
      console.log(hash[element]);
      hash[element] = hash[element] + 1;
    } else {
      // Set the initial value to 1 for the first occurrence
      hash[element] = 1;
    }
  });

  let duplicates = Object.keys(hash).filter((key) => hash[key] > 1);

  return duplicates;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

const result = findDuplicates(nums);
console.log(result);

//solved with linear time complexity of O(n)
