function birthdayCandles(arr){
    var max = 0;
    var occ = 0;
    for(var i = 0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    var occ = arr.filter(n => n==max);
    return occ.length;
}

var re = birthdayCandles([3,2,1,3]);
console.log(re);