function SelectionSort(arr){

    let i=0;
    let j =0;
    let temp = 0;
    let min = 0;
    for(i=0;i<arr.length;i++){
        min = i;
        for(j = i+1;j<arr.length;j++){
            if(arr[min] > arr[j]){
                min = j;
            }
            
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;

    }
    console.log(arr.toString());
}
var arr = [2, 8, 1, 3, 6, 7, 5, 4];
SelectionSort(arr);