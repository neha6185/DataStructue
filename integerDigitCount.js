function integerDigitCount(num){
   
    if(Number.isInteger(num)){
        var numAbs = Math.abs(num);
        var numStr = numAbs.toString();
        return numStr.length;
    }
    else{
        return 0;
    }
}
console.log(integerDigitCount(-23425345));