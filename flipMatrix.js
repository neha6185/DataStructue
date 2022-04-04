function flipMatrix(arr){
    var sum = 0;
    var quad = arr.length/2;
    for(var i =0;i<quad;i++){
        for(var j=0;j<quad;j++){
            
            sum += Math.max(Math.max(arr[i][j],arr[i][2*quad-i-j]),Math.max(arr[2*quad-i-j][j],arr[2*quad-i-j][2*quad-i-j]));
        }
    }
    return sum;
}

var arr = [[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]];
var re = flipMatrix(arr);
console.log(re);