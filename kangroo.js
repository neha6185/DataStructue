function karngroo(x1,v1,x2,v2){
    if((x1-x2)% (v2-v1) === 0 && v2-v1<0 ){
        console.log("Yes");
    }
    else{
        console.log("No");
    }



}

karngroo(0,3,4,2);