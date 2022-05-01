const berekenBTW = (prijs, BTW =6) => prijs * (1 + BTW/100);
console.log(berekenBTW(100,21));
console.log(berekenBTW(100));