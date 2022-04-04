function reverseArray(a) {
    // Write your code here
    var newArr =[];
    var index = 0;
    for(var i =a.length-1;i>=0;i--){
        newArr[index] = a[i];
        index++;
    }
    return newArr;
}

var a = [1,4,3,2];
console.log(reverseArray(a));