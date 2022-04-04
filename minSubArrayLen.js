function minSubArrayLen(arr,sum){
    let start = 0;
    let end = 1
    var tempSum = 0;
    let minSubArraySize = 1;
    while(end < arr.length){
        if(arr[start] >= sum) return minSubArraySize;
        if(tempSum < sum ){
            tempSum += arr[start] + arr[end];
            end++;
        }
        if(tempSum > sum ){
            tempSum -= arr[start];
            
        }
    }
}