function sumZero(arr){
let lPtr = 0;
let rPtr = arr.length-1;
while(lPtr <rPtr){
    sum = arr[lPtr] + arr[rPtr];
    if(sum === 0){
        return[arr[lPtr],arr[rPtr]];
    }
    else if(sum >0){
        rPtr--;
    }
    else{
        lPtr++;
    }
}


}

var arr = [-4,-3,-2,-1,0,1,2,3,10];
console.log(sumZero(arr));