// Q5: Check Array is Sorted (Ascending)
// Input:
// arr = [1, 2, 3, 4, 5]
// Output:
// true

// Input:
// arr = [1, 3, 2, 4]
// Output:
// false

let arr = [1, 2, 3, 7, 5];
let isSorted = true;
for(let i = 0; i <arr.length - 1;i++){
  if(arr[i]>arr[i+1]){
    isSorted = false;
    break;
  }
}
console.log(isSorted);