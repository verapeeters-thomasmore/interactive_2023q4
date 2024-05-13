console.log("------------------------ weapon");
const weapon = {
    name: "Engraved Arming Sword",
    guardDamage: 7,
    healthDamage: 5,
};
console.log(weapon);

console.log("------------------------ upgrade weapon");

function upgrade_simple(weapon) {
    return {...weapon, guardDamage: weapon.guardDamage + 1, healthDamage: weapon.healthDamage + 1}
}

console.log("upgrade");
console.log(upgrade_simple(weapon));

const anotherWeapon = {
    name: "Heartsplitter",
    guardDamage: 6,
    healthDamage: 7,
    numberOfslots: 2,
    traits: ["HeartSeeker", "Weighted"]
}

console.log(anotherWeapon);
console.log(upgrade_simple(anotherWeapon));

console.log("------------------------ upgrade weapon with version");

function upgrade(weapon) {
    return {
        ...weapon,
        guardDamage: weapon.guardDamage + 1,
        healthDamage: weapon.healthDamage + 1,
        version: weapon.version + 1 || 1
    }
}

console.log(weapon);
console.log("upgrade");
console.log(upgrade(weapon));

console.log(anotherWeapon);
console.log(upgrade(anotherWeapon));
console.log(upgrade(upgrade(anotherWeapon)));

console.log("------------------------ warrior");
let warrior = {left: weapon, right: anotherWeapon};
console.log(warrior);

console.log("------------------------ amount of damage");
function amountOfDamage(warrior, hand, typeOfAttack) {
    return warrior[hand][typeOfAttack];
}

console.log(amountOfDamage(warrior, "left", "guardDamage"));
console.log(amountOfDamage(warrior, "left", "healthDamage"));
console.log(amountOfDamage(warrior, "right", "guardDamage"));
console.log(amountOfDamage(warrior, "right", "healthDamage"));

console.log("------------------------ describe damage for warrior");
const hands = ["left", "right"];
const typesOfDamage = ["guardDamage", "healthDamage"];

function logAllAmountsOfDamage(warrior) {
    hands.forEach(h => typesOfDamage.forEach(t => console.log(`${h} hand ${t}: ${amountOfDamage(warrior, h, t)}`)))
}

logAllAmountsOfDamage(warrior);

console.log("------------------------ new weapon");
const newWeapon = {
    name: "Ritual Dagger",
    guardDamage: 5,
    healthDamage: 5,
};
warrior = {...warrior, left: newWeapon};
logAllAmountsOfDamage(warrior);

console.log("------------------------ upgrade right weapon");
warrior = {...warrior, right: upgrade(warrior.right)};
logAllAmountsOfDamage(warrior);

