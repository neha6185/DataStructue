function parseString (str){
    var num = 0;
    for(var i = 0;i<str.length;i++){
        num = num*10+ parseInt(str[i]);
    }
   console.log(num);
}

parseString("1234");