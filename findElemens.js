//  Given a list of non negative ints , and a sum , find the continuous sequence which sums to that given sum

function find(arr,sum){
    for(var i = 0;i<arr.length;i++){
        
        

        if(arr[i] +arr[i+1] == sum){
            var resArr = [i,i+1];
            console.log(`Index: ${resArr}`);
            return true
        }
    }
    return false;

}
var arr = [1,3,3,5,6];
var result = find(arr,1);
console.log(result);