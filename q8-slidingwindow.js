function maxSumSubarray(arr,k){
  // Q8: Maximum Sum Subarray of Size K
  // 🔹 Explanation
  // Sliding window technique ka use karo.
  // 🔹 Example
  // Input: [2, 1, 5, 1, 3, 2], k=3
  // Output: 9


 let sum = 0;
 for(let i = 0;i<k;i++){
    sum = sum+arr[i];
 }
 let mexSum = sum ;
 for(let i = k; i<arr.length;i++){
  sum = sum +arr[i] - arr[i-k];
  if(sum>mexSum){
    mexSum = sum;
   }
 }
  return mexSum;
 }
  console.log(maxSumSubarray([2, 1, 5, 1, 3, 2],3));