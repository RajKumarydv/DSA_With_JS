function isPalindrome(str){
  let left = 0;
  let right = str.length - 1; 
  while(left < right){
    if(str[left] !== str[right]){
      return false; 
    }
    right--;
    left++;
  }
  return true;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("step on no pets")); // true
console.log(isPalindrome("JavaScript")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // false