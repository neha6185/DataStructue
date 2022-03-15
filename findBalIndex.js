// Given Array of numbers , find the balance index

// [-7,5,1,2,3,1,-5] , here index:3 is balance index as arr[0] + arr[1] + arr[2] = arr[4] + arr[5] + arr[6]

function findBalanceIndex(arr){
    var lfSum = 0;
    var rtSum = 0; 
    var sumTotal = 0;
    var balIndex = 1;
    for(var i = 0;i<arr.length;i++){
         sumTotal += arr[i];  
    }
    for(var i =0;i<arr.length;i++){
        if(balIndex > i){
            lfSum += arr[i];
            rtSum = sumTotal - (lfSum + arr[balIndex]);
         }
         if(lfSum != rtSum){
             balIndex++;
         }else{
             return balIndex;
         }

         
    }
    return undefined;
    
  
}
var arr = [-7,5,1,2,3,1,-5];
console.log(findBalanceIndex(arr));