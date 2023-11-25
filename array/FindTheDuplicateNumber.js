//(I/P)---> [1,2,3,4,2,2]
//(O/P)---> 2

//(I/P)---> [3,1,3,1,4,2]
//(O/P)---> 3

//optimized solution

var findDuplicate = function (nums) {
  let fast = 0;
  let slow = 0;

  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];

    if (fast === slow) {
      let pointer = 0;
      while (pointer !== slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      }

      return pointer;
    }
  }
};

const nums = [3, 1, 3, 1, 4, 2];

const result = findDuplicate(nums);
console.log(result);
