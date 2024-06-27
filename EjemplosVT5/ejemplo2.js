var bet = new Perro("Beethoven , 2, "sanbernardo", "GUUF");

console.log(perruedines.color);
console.log(bet.color);
console.log(ayudante,color);

Perro.prototype.color = "blanco";
ayudante.__proto__.color = "negro";

var pancho = new Object();

perruedines.color = "marron";
ayudante.color ="canela";

console.log(perruedines.color);
console.log(bet.color);
console.log(ayudante.color);
console.log(pancho.color);