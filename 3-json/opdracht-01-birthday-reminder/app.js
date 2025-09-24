//Opdracht
//Je gaat een birthday reminder applicatie maken zoals hieronder op de afbeelding wordt getoond.

//Maak een json-bestand met zes verschillende objecten. Elk object heeft een naam, leeftijd en afbeelding van een persoon.
//Toon alle data uit je json-bestand op het scherm (zie afbeelding)
//Het getal ‘5’ uit de titel is niet handmatig ingevoerd, maar je telt de aantal objecten uit je json-bestand en dat toon je op het scherm
//Als je op de ‘clear all’ knop klikt moet alle data van het scherm verwijderd worden (niet uit het json-bestand verwijderen)
//Style het zoals op het voorbeeld wordt weergeven (kleur mag afwijken)

const clearButton = document.querySelector('.clear-button');
const birthdayContainer = document.querySelector('.birthday');

// JSON data met zes personen



function renderBirthdays() {
  birthdayContainer.innerHTML = `
    <h2>${birthdays.length} Verjaardagen vandaag</h2>
    <div class="birthday-list">
      ${birthdays.map(birthday => `
        <div class="birthday-item">
          <img src="${birthday.image}" alt="${birthday.name}">
          <div>
            <h2>${birthday.name}</h2>
            <p>Leeftijd: ${birthday.age}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

renderBirthdays();

clearButton.addEventListener('click', function() {
  birthdayContainer.innerHTML = '';
});













