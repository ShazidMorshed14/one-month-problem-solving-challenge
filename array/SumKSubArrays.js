/*********************
 * Given question is
 * Find the sum of all the sub arrays of length k in the given array
 * i/p---->[1,2,3,4,5,6] and k=3
 * o/p---->[6,9,12,15]
 *
 * Fixed Sliding Window Pattern
 *
 * **************************************** */

const SumKSubArrays = (arr, k) => {
  let sum = 0;
  let curr_sub_array = 0;
  let list = [];

  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }

  curr_sub_array = sum;
  list.push(curr_sub_array);

  for (let i = 1; i < arr.length - k + 1; i++) {
    curr_sub_array = curr_sub_array - arr[i - 1];
    curr_sub_array = curr_sub_array + arr[i + k - 1];
    list.push(curr_sub_array);
  }

  return list;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

const ans = SumKSubArrays(nums, k);

console.log(ans);
