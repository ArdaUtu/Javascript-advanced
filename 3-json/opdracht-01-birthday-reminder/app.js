//Opdracht
//Je gaat een birthday reminder applicatie maken zoals hieronder op de afbeelding wordt getoond.

//Maak een json-bestand met zes verschillende objecten. Elk object heeft een naam, leeftijd en afbeelding van een persoon.
//Toon alle data uit je json-bestand op het scherm (zie afbeelding)
//Het getal ‘5’ uit de titel is niet handmatig ingevoerd, maar je telt de aantal objecten uit je json-bestand en dat toon je op het scherm
//Als je op de ‘clear all’ knop klikt moet alle data van het scherm verwijderd worden (niet uit het json-bestand verwijderen)
//Style het zoals op het voorbeeld wordt weergeven (kleur mag afwijken)

const clearButton = document.querySelector('.clear-button');
const birthdayContainer = document.querySelector('.birthday');
const AmountBirthday = document.querySelector('.AmountOfPeople');

// JSON data met zes personen



fetch("./birthday.json")
.then((response) => response.json())
.then((birthday) => {
    
clearButton.addEventListener('click', function(){
    birthdayContainer.innerHTML = "";
    AmountBirthday.innerHTML = `<h2>0 verjaardagen vandaag</h2>`;
    birthday = [];
});
    AmountBirthday.innerHTML = `<h2>${birthday.length} verjaardagen vandaag</h2>`
for (let mensen of birthday){
    birthdayContainer.innerHTML
     += `
     <div>
    <h2>Naam: ${mensen.name}</h2>
    <h3>Leeftijd: ${mensen.age}</h3>
    <img class="image" src="${mensen.image}">
    </div>
`;
}
});


//alle afbeeldingen in een image folder
//styling
//de lengte van birthday in een h2


















