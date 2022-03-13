function repDigit(num){
    if(num <0){
        return false;
    }
   numStr = num.toString();
   
   for(var i =1;i<numStr.length;i++){
    
       if(numStr[i] !== numStr[i-1]){
        return false;

       }
       
 }
 return true;
}
console.log(repDigit(-989));