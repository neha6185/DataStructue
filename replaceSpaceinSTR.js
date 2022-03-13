
function replaceSpaceinStr(str){
    var str1 = [];
    str1 = str.trim();
    
    str1 = str1.split(' ');
   var len = str1.length;
    for(var i=0;i<len-1;i++){
    
        str1[i] += '%20';
    }
    
  
    console.log(str1);
    //use join to return array as string
    let str2 = str1.join('');
    console.log(str2);
}
replaceSpaceinStr('Hello My Name    ');