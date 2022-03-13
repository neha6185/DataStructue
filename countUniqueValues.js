// use this solution if you are allowed to manipulate the existing array
function countUniqueValue(arr){
    let i =0;
    let j=i+1;
    let count =0;
    while(j<arr.length){
        if(arr[i] !== arr[j]){
            count++;
            i++;
            i=j;
            j++;
        }
        else{
       j++;
        

    }
   
} return count +1;
}

var arr = [1,1,1,2,2,3,3,4,4,4,5,5,6,7,7,9];
console.log(countUniqueValue(arr));