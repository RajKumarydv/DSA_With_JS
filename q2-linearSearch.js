// Q2: Find Index of First Occurrence (Linear Search)
// Input:
// arr = [4, 9, 7, 2, 1], target = 7
// Output:
// 2
// Explanation:
// The target value 7 is found at index 2 in the array.

let arr = [4, 9, 7, 2, 1];
let target = 7;
for(let i=0;i<arr.length;i++){
  if(arr[i]===target){
    console.log(i);
  }
}