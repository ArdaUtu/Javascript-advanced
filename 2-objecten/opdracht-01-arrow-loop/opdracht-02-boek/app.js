// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.
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




// Het object moet de volgende properties bevatten:

//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.

// In de theorie staat uitgelegd hoe je dit moet doen.

// Let op: in de code conventions staat dat je de code in het Engels moet schrijven!