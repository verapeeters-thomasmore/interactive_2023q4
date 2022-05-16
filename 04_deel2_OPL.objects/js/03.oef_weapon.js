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

console.log()
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

console.log()
console.log("------------------------ upgrade weapon with version");

function upgrade(weapon) {
    return {
        ...weapon,
        guardDamage: weapon.guardDamage + 1,
        healthDamage: weapon.healthDamage + 1,
        version: weapon.version + 1 || 1
    }
}

console.log()
console.log(weapon);
console.log("upgrade");
console.log(upgrade(weapon));

console.log()
console.log(anotherWeapon);
console.log(upgrade(anotherWeapon));
console.log(upgrade(upgrade(anotherWeapon)));
