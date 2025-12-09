function minSubArray(nums,S){
  // Q10: Find the minimum length of a contiguous subarray of which the sum ≥ S.
  // Input:
  // nums = [2,3,1,2,4,3], S = 7
  // Output:
  // 2
  // Explanation:
  // The subarray [4,3] has the minimal length under the problem constraint.
  
  let start = 0  
  let sum = 0;
  let minLength = Infinity;
   for(let end = 0; end < nums.length; end++){
     sum += nums[end];
     while(sum >=S){
      minLength = Math.min(minLength, end - start + 1);
      sum -= nums[start];
      start += 1;
     }
   }
    return minLength === Infinity ? 0 : minLength;
}
console.log(minSubArray([2,3,1,2,4,3],7));