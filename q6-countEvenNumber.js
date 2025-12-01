// Q3: Count Even Numbers
// 🔹 Explanation
// Even numbers count karna hai.

// 🔹 Example
// Input: [2, 7, 8, 11, 14]
// Output: 3

function countEvenNumbers(arr){
   let count = 0;
   for(let i = 0; i <arr.length;i++){
    if(arr[i]%2===0){
      count++;
    }
     return count;
   }
}
console.log(countEvenNumbers([2, 7, 8, 11, 14]));