console.log("------------------------ object person ------------------------ ");
const person = {
    name: "Karla",
    age: 21,
    city: "Mechelen"
};
console.log(person);

console.log("------------------------ property uitlezen met een . (object person) ------------------------ ");
console.log(person.name);
console.log(`${person.name} is ${person.age} jaar oud en woont in ${person.city}`);


console.log("------------------------ property uitlezen met [] (object person) ------------------------ ");
console.log(person["name"]);
console.log(`${person["name"]} is ${person["age"]} jaar oud en woont in ${person["city"]}`);


console.log("-------- properties --------");
const s = "een woord";
console.log (s.length);
console.log (s["length"]);

console.log("Een woord".length);
console.log("Een woord"["length"]);

console.log("------------------------ object day1 ------------------------ ");
const day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"],
    2: "de tweede",
    "touched tree": "heeft een boom geraakt"
};
console.log(day1.squirrel);
day1.squirrel = true;
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
console.log(day1[2]);
console.log(day1.events[2]);
console.log(day1["touched tree"]);


console.log("-------- function value as property --------");
const doh = "Doh";
console.log(typeof doh);
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

console.log("------------------------ object is collection van properties  ------------------------");
console.log(Object.keys(day1));

console.log("------------------------ Objecten zijn referenties ---------------------");
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 === object2);
console.log(object1 === object3);
object1.value = 15;
console.log(object1);
console.log(object2);
console.log(object3);

console.log("------------------------ Objecten zijn referenties ---------------------");
const score = {visitors: 0, home: 0};
score.visitors++;
//volgende lijn geeft een fout:
//score = { visitors: 1, home: 1 };


console.log("------------------------ nieuwe properties in een object zetten ---------------------");
const objectWithoutProperties = {};
console.log(objectWithoutProperties);
objectWithoutProperties.veldje1 = 25;
objectWithoutProperties.veldje2 = "eenstring";
objectWithoutProperties.veldje3 = [];
objectWithoutProperties.veldje4 = {"leeftijd": 25, "naam": "Tom"};
console.log(objectWithoutProperties);

console.log("------------------------ onbestaande property ---------------------");
const objectWithoutName = {};
console.log(objectWithoutName.name);
