function countTrue(arr){
    var countArr = arr.filter(x => x==true);
    console.log(countArr.length);
}
var arr = [true,false,false,true,true];
countTrue(arr);