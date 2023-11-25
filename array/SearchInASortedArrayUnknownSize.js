console.log("search in a sorted array of unknown size");

const binarySearch = (nums, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    //if mid is greater than the target then search in the left section
    if (nums[mid] > target) {
      return binarySearch(nums, target, start, mid - 1);
    } else {
      return binarySearch(nums, target, mid + 1, end);
    }
  }

  return -1;
};

const search = (nums, target) => {
  let left = 0;
  let right = 1;
  let result;

  //first find the range here  ---->this operation takes nLogN time complexity
  while (nums.at(right) < target) {
    left = right;
    right = right * 2;
  }

  result = binarySearch(nums, target, left, right);

  return result;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 11;

const result = search(nums, target);
console.log(result);

//binary search has a time complexity of nLogn
