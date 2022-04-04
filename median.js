function findMedian(arr) {
    // Write your code here
    var a = arr.sort((a,b)=>a-b);
    console.log(a);
    const m =Math.floor(a.length/2);
    var median;
    if(a.length%2 ===0){
        median =  (a[m-1]+a[m])/2;
    }
    else{
        median = a[m];
    }
    
    console.log(median);
    
}
findMedian([5,3,1,2,4]);