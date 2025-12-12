function pairSum(arr, target){
  let left = 0;
  let right = arr.length -1;
  while(left<right){
    let sum = arr[left] + arr[right];
    if(sum === target){
      return [left, right] , true;
    }
    else if(sum < target){
      left++;
    }
    else{
      right--;
    }
  }
  return [-1, -1], false;
}
console.log(pairSum([1,2,3,4,6], 6)) // true
console.log(pairSum([2,5,9,11], 11)) // false