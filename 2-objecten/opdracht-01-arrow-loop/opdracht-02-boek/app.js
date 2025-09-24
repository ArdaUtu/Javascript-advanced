// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.
//Volgende keer die rode code in het engels schrijven bijv: titel, auteur.
const book = {
 titel: "The Great Gatsby",
  auteur: "F. Scott Fitzgerald",
  uitgever: "Charles Scribner's Sons",
  jaar: 1925,
  verkocht: 25000000,
  prijs: "$10.99"
};


document.querySelector('.output').innerHTML = `
<h2>${book.titel}</h2>
<p>${book.auteur}</p>
<p>${book.uitgever}</p>
<p>${book.jaar}</p>
<p>${book.verkocht}</p>
<p>${book.prijs}</p>
`
;
