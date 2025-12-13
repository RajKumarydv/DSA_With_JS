function removeDuplicate(arr){
  let slow = 0;
  for(let fast = 1; fast <arr.length; fast++){
    if(arr[slow] !== arr[fast]){
      slow++;
      arr[slow] = arr[fast];
    }
  }
  return slow + 1;
}
console.log(removeDuplicate([2,3,3,3,6,9,9])) // 4
console.log(removeDuplicate([2,2,2,11])) // 2
// print the upadated array
console.log(removeDuplicate([2,3,3,3,6,9,9]), [2,3,6,9]) // 4