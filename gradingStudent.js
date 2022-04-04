function gradingStudent(grades){
    var re =[];
    for(var i=0;i<grades.length;i++){
        var diff = grades[i]%5;
        if(grades[i] <38){
            re.push(grades[i]);
        }
        else if(diff >= 3)
        {
            re.push(grades[i]+(5-diff));
        }
        else if(diff < 3){
            re.push(grades[i]);
        }
    }
    return re;
}

var re = gradingStudent([73,67,38,33]);
console.log(re);
