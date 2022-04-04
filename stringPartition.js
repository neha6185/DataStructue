function StringPartition(s){
var lookup = [];

    for(var i = 0;i<s.length;i++){
         var key = s[i];
         lookup[key] = i;
        
    }
    console.log(lookup);
    var partition =[];
    var start = 0;
    var end = 0;
    for(var i = 0;i<s.length;i++){
        end = Math.max(end,lookup[s[i]]);
        if(i ==end){
            partition.push(i-start +1);
            start = i+1;
        }
    }

    return partition;
}
var s = "ababcbacadefegdehijhklij";
var re = StringPartition(s);
console.log(re);