  // arr = [4, 2, 2, 7, 8, 1, 2, 8, 10];
  // S = 8;

  function minSubArray(arr, S) {
    let start =  0;
    let sum  = 0
    let minLength = Infinity;

    for(let end = 0; end < arr.length; end++){
      sum += arr[end];
    while(sum >=S){
      minLength = Math.min(minLength, end - start + 1);
      sum -= arr[start];
      start++;
    }    
    }
  return minLength === Infinity ? 0 : minLength;
  }
console.log(minSubArray([4, 2, 2, 7, 8, 1, 2, 8, 10], 8));