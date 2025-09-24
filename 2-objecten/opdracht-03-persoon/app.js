// Stap 1
const persoon = {
name: "arda",
age: "18",
birth: "24 juni 2007",
sex: "man",
status: true,
hobbys: ["gamen"],

veranderName: function(name){
this.name = name
},
veranderStatus: function(status){
this.status = status
},
veranderHobby: function(newHobby){
this.hobbys.push(newHobby)

}
};


persoon.veranderHobby("voetballen")
persoon.veranderStatus(false)
persoon.veranderName("arda")

//omdat de output een class is moet er een punt erachter
document.querySelector('.output').innerHTML = `
<h2>${persoon.name}</h2>
<p>${persoon.age}</p>
<p>${persoon.birth}</p>
<p>${persoon.sex}</p>
<p>${persoon.status}</p>
<p>${persoon.hobbys}</p>
`
;
// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

// Het object moet ook de volgende methods bevatten:

//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!