let kim = " Kimberley  ";
kim.age = 88;
console.log(kim.age);
console.log(kim.slice(4,7));
console.log(kim.indexOf("le"));

kim = kim.trim();
console.log(kim.indexOf("le"));
console.log(String(kim.indexOf("le")).padStart(3, "0"));

let zin = "de kat krabt de krollen van de trap";
console.log(zin);
let woorden = zin.split(" ");
console.log(woorden);
zin = woorden.join("_");
console.log(zin);

zin = zin.repeat(3);
console.log(zin);
