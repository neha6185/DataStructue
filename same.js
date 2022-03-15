function sameFrequency(arr1,arr2){
    if(arr1.length !== arr2.length) return false;
    var arr = arr1.map(e =>e*e);
    console.log(arr);
    for(var i= 0;i<arr2.length;i++){
        if(arr.includes(arr2[i])){
            var index = arr.indexOf(arr2[i]);
            console.log(arr.splice(index,1));

        }
        else{
            return false;
        }
    }
    return true;

}
var result = sameFrequency([1,2,1],[4,1]);
console.log(result);