function compareTriplets(a, b) {
    // Write your code here
    var arrPt = [0,0];
    
    var len = a.length;
    for(var i =0;i<len;i++){
        if(a[i] >b[i]){
            
            arrPt[0] +=1;
        }
        if(a[i] < b[i]){
            arrPt[1] +=1;
        }
    }
    return arrPt.toString();

}

var a =[1,2,3],b=[3,2,1];
var re = compareTriplets(a,b);
console.log(re);