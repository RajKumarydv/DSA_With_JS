function maxSumSubarray(nums ,k){
  // Q9: Find the maximum sum of any contiguous subarray of size k.
  // Input:
  // nums = [1,3,-1,-3,5,3,6,7], k = 3
  // Output:
  // 16
  // Explanation:
  // Subarray with maximum sum is [5, 1, 3].

  let sum =0;
  for(let i = 0;i<k;i++){
    sum = sum + nums[i];
  }
  let mexSum = sum;
  for(let i = k;i<nums.length;i++){
    sum = sum + nums[i] - nums[i-k];
    if(sum > mexSum){
      mexSum = sum;
    }
  }
  return mexSum;
  
}
console.log(maxSumSubarray([1,3,-1,-3,5,3,6,7],3));