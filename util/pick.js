// Choose the defined value in a list of 2 values
module.exports = function(val1, val2) {
    return typeof val1 == "undefined" ? val2 : val1;
};