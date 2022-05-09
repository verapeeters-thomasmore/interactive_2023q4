let obj = { squirrel: false, wolf: false, events: ["weekend", "monday"] };
let data = JSON.stringify(obj);
console.log(data);
console.log(JSON.parse(data));
console.log(JSON.parse(data).wolf);