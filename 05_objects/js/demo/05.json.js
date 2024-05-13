const randomObject = { squirrel: false, wolf: false, events: ["weekend", "monday"] };

const stringifiedObject = JSON.stringify(randomObject);
const parsedObject = JSON.parse(stringifiedObject);

console.log("Original object: ", randomObject);
console.log("Stringified object: ", stringifiedObject);
console.log("Parsed object: ", parsedObject);
console.log("Parsed object.events: ", parsedObject.events);
