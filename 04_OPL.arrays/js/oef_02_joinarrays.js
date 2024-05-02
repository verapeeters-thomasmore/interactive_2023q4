const joinArrays = (a1, a2) => a1.slice(0, a1.length / 2).concat(a2).concat(a1.slice(a1.length / 2));

console.log(joinArrays([1, 2, 3, 4], [20, 30, 40]));


