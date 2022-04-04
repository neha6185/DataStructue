function plusMinus(arr) {
    // Write your code here
    var pos=0,neg=0,zer=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] >0){
            pos++;
        }
        if(arr[i] <0){
            neg++;
        }
        if(arr[i] ===0){
            zer++;
        }
    }
    var posFrac = (pos/arr.length).toFixed(6);
    var negFrac = (neg/arr.length).toFixed(6);
    var zerFrac = (zer/arr.length).toFixed(6);
    var arrFrac = [posFrac,negFrac,zerFrac];
    return arrFrac.toString();
    

}

var arr = [-4, 3, -9, 0, 4, 1];
var res = console.log(plusMinus(arr));
