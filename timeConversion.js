function timeConversion(s){
    var str = s.split(':');
    var sec = str[2].substr(0,2);
    var time = str[2].substr(2);
    console.log(time);
    if(str[0] ==12 && time == "PM"){
        return s.substr(0,8);
    }
    else if(str[0] ==12 && time =="AM"){
        str[0] ='00';
        return str[0]+':'+str[1]+':'+sec;

    }
    else if(time=='PM'&& str[0] <12){

       str[0]= parseInt(str[0]) +12;
        return str[0]+':'+str[1]+':'+sec;
    }
    else if(time=='AM' && str[0] <12){

        return s.substr(0,8);
       }
    
}

var re = timeConversion("07:01:00AM");
console.log(re);