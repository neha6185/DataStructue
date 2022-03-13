function arrayOfMultiples(num,length){
    var multipleArray=[];
    for(var i=1;i<=length;i++){
       newNum = num *i;
       multipleArray.push(newNum);
    }
    console.log(multipleArray);
}
arrayOfMultiples(5,3);