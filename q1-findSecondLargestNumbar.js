//  Q4: Find the Second Largest Number
// Input:
// arr = [12, 35, 1, 10, 34, 1]
// Output:
// 34
// Explanation:
// Largest = 35
// Second largest = 34

let arr = [12, 35, 1, 10, 34, 1];
let largestNumber = -1;
let sceondLargestNumber = -1;
 for(let i=0;i<arr.length;i++){
  if(arr[i]>largestNumber)
  {
    sceondLargestNumber = largestNumber;
    largestNumber = arr[i];
  }
  else if (arr[i]<largestNumber && arr[i]>sceondLargestNumber ){
    sceondLargestNumber = arr[i]
  }
 }
 console.log(sceondLargestNumber);
 