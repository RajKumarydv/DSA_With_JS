// Input:
// arr = [1, 2, 3, 4]
// Output:
// [1, 3, 6, 10]
// Explanation:
// Each element = sum of all previous elements.

let arr = [1, 2, 3, 4];
let result = [];
let sum = 0;
for(let i=0;i<arr.length;i++){
  sum+=arr[i];
  result.push(sum);
}
console.log(result);