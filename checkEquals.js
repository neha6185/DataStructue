function checkEquals(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    var len = arr1.length;
    for(var i =0;i<len;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}


var arr1 = [4, 5, 6];
var arr2 = [4, 5, 6];
console.log(checkEquals(arr1,arr2));