function ReactangleOverlap(rec1,rec2){
// rec1 = x1,y1,x2,y2,[0,1,2,3]

return(Math.min(rec1[2],rec2[2]) > Math.max(rec1[0],rec2[0]) && Math.min(rec1[3],rec2[3]) > Math.max(rec1[1],rec2[1]));


       
    
}

var re = ReactangleOverlap([0,0,1,1],[2,2,3,3]);
console.log(re);