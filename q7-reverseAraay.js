// Q5: Reverse Array (Without reverse())
// 🔹 Explanation
// Loop ko last se first tak chalao.

// 🔹 Example
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

function reverseArray(arr){
  let reversedArray = [];
  for(let i = arr.length - 1; i >=0; i--){
    reversedArray.push(arr[i]);
  }
  return reversedArray
  }
  console.log(reverseArray([1, 2, 3, 4]));