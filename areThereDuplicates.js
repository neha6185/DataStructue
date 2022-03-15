function areThereDuplicates(...args){
    args.sort();
    let start = 0;
    let next = start +1;
    while(next < args.length){
        if(args[start] == args[next]) return true;
        start++;
        next++;

    }
    return false;

}

var res = areThereDuplicates('a','b','c','a');
console.log(res);