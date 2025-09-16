// Opdracht 2.3: Find en FindIndex
console.log('🚀 Opdracht 2.3: Find en FindIndex');

const temperaturen = [18, 22, 25, 19, 28, 24, 21];
const kleuren = ['rood', 'blauw', 'groen', 'geel', 'paars', 'oranje'];

console.log('Temperaturen:', temperaturen);
console.log('Kleuren:', kleuren);

// TODO: Zoek de eerste temperatuur boven 25 graden
const warmeTemperatuur = temperaturen.find(persoon => persoon.temperaturen > 25); /* jouw code hier */
console.log('Eerste warme temperatuur:', warmeTemperatuur);

// TODO: Zoek de index van de kleur 'groen'
const groenIndex = kleuren.findIndex(kleur => kleur ==='groen'); /* jouw code hier */
console.log('Index van groen:', groenIndex);

// TODO: Zoek de eerste temperatuur onder 20 graden
const koudeTemperatuur = temperaturen.find(persoon => persoon.temperaturen < 20); /* jouw code hier */
console.log('Eerste koude temperatuur:', koudeTemperatuur);

// TODO: Zoek de index van de eerste temperatuur boven 23 graden
const warmeIndex = temperaturen.findIndex(temperatuur => temperatuur > 23); /* jouw code hier */
console.log('Index van eerste warme temperatuur:', warmeIndex);