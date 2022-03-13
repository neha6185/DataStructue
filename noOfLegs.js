var getConcatenation = function(nums) {
    return ([...nums,...nums]);

};
var nums = [1,2,3];
console.log(getConcatenation(nums));