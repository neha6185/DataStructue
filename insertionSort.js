function InsertionSort(arr){
    
    let currVal = 0;
    let j = 0;
    let i =0;

    for(i=1;i<arr.length;i++){
        currVal = arr[i];
        for(j=i-1;j>=0;j--){
            if(currVal < arr[j]){
                arr[j+1] =arr[j];
                arr[j] =currVal;
            }
            //arr[j+1] = arr[j];
            console.log(arr);
        }
       // arr[j+1] = temp;
    }
    //console.log(arr);

}

var arr = [2, 8, 1, 3, 6, 7, 5, 4];
InsertionSort(arr);