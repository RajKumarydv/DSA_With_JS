function removeZero(arr) {
  let slow = 0;
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      arr[slow] = arr[fast];
      slow++;
    }
  }
  while (slow < arr.length) {
    arr[slow] = 0;
    slow++;
  }
  return arr;
}
console.log(removeZero([1, 3, 12, 0, 0]));
console.log(removeZero([0, 0, 1, 0, 3, 12]));
console.log(removeZero([0, 0, 0, 0]));