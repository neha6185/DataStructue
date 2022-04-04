function timeConversion(s){
    var ampmtime = s.substr(8);
    var time = s.substr(0,8);
    var timeArr = time.split(':');
    console.log(`${ampmtime} ${time} ${timeArr}`);
    var hr;
    var min = timeArr[1];
    var sec = timeArr[2];
    if(ampmtime.toUpperCase() === 'PM' && timeArr[0] < 12){
        hr = parseInt(timeArr[0]) +12; 
    }else if(ampmtime.toUpperCase() ==='AM' && timeArr[0] < 12){
        hr = timeArr[0];
    }else if(timeArr[0]=='12' && ampmtime.toUpperCase() == 'AM'){
        hr = 00;
    }
    else if(timeArr[0]=='12' && ampmtime.toUpperCase() == 'PM'){
        hr = 12;
    }


    return (`${hr}:${min}:${sec}`);
}

var re =timeConversion('12:01:45PM');
console.log(re);