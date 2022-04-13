const multiplier = function(factor) {
    //return number => number * factor;
    //return function(nummer) { return nummer * factor; };
    let f = function(nummer) { return nummer * factor; };
    return f;
}
let twice = multiplier(2);
console.log(twice(5));

let sevenTimes = multiplier(7);
console.log(sevenTimes(5));
