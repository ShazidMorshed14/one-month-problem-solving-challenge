// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  let f = m - 1;
  let s = n - 1;
  let i = m + n - 1;

  while (s >= 0) {
    if (nums1[f] > nums2[s]) {
      nums1[i] = nums1[f];
      f--;
      i--;
    } else {
      nums1[i] = nums2[s];
      s--;
      i--;
    }
  }

  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

const result = merge(nums1, m, nums2, n);
console.log(result);

//T:O(m+n)/O(n)
//S:O(1)
