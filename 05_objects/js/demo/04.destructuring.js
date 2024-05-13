console.log("------------------------ parameter  object ---------------------");
function printNaamObject({ firstName, lastName }) {
  console.log(lastName + ", " + firstName);
}
printNaamObject({ firstName: "Els", lastName: "Degroot", age: 55 });

console.log("------------------------ parameter array ---------------------");
function printNaamArray([firstName, lastName]) {
  console.log(lastName + ", " + firstName);
}
printNaamArray(["Els", "Degroot", "Mevr"]);

console.log("------------------------ assignment  array ---------------------");
const people = ["Els", "Koen", "Vera"];
const [firstPerson, secondPerson, thirdPerson] = people;
console.log(
  `The first person is ${firstPerson} and the second person is ${secondPerson} and the third person is ${thirdPerson}`
);

console.log("------------------------ assignment  object ---------------------");
const person = { id: 1452, firstName: "Els", lastName: "Degroot", age: 55 };
const { firstName, lastName, ...rest } = person;
console.log(`Voornaam: ${firstName}, Naam: ${lastName}`);
console.log("Rest: ", rest);
