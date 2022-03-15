function maxSubArraySum(arr,num){
    var tempSum = 0;
    var maxSum = 0;
    if(arr.length <num) return undefined;
    for(var  i =0;i<num;i++){
        maxSum +=arr[i];
    }
    tempSum = maxSum;
    for(var i = num;i<arr.length;i++){
        tempSum = tempSum -arr[i-num] + arr[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;

}

var result = maxSubArraySum([2,5,3,8,1,9,6],3);
console.log(result);