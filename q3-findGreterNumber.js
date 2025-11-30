//  Q3: Count Numbers Greater Than X
// Input:
// arr = [3, 10, 5, 7, 20], x = 6
// Output:
// 3
// Explanation:
// Greater numbers → 10, 7, 20.

let arr = [3, 10, 5, 7, 20];
 let x = 6;
 for(let i=0;i<arr.length;i++){
  if(arr[i]>x){
    console.log(arr[i]);
  }
 }