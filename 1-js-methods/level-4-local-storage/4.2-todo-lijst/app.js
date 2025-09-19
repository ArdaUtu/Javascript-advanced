// Opdracht 4.2: Todo Lijst
console.log('🚀 Opdracht 4.2: Todo Lijst');

let taken = []; // Array van strings (geen objecten!)

function voegTaakToe() {
    const input = document.getElementById('nieuwe-taak');
    const taakTekst = input.value.trim();  /* jouw code hier - haal waarde op en trim */;
    
    if (taakTekst === '') {
        alert('Voer een taak in!');
        return;
    }
    
    // TODO: Voeg taak toe aan array (gewoon de string)
    taken.push(taakTekst/* jouw code hier */);
    
    // TODO: Sla taken op in localStorage
    /* jouw code hier - gebruik JSON.stringify */;
    localStorage.setItem('gebruikerData', JSON.stringify('taken'));
    // Maak input leeg en update UI
    input.value = '';
    toonTaken();
}

function laadTaken() {
    // TODO: Haal taken op uit localStorage
    const opgeslagenTaken = localStorage.getItem('taken'); /* jouw code hier */;
    
    if (opgeslagenTaken) {
        // TODO: Parse JSON naar array
        taken = JSON.parse(opgeslagenTaken); /* jouw code hier */;
    }
}

function toonTaken() {
    const container = document.getElementById('taken-lijst');
    
    if (taken.length === 0) {
        container.innerHTML = '<p>Geen taken toegevoegd.</p>';
        return;
    }
    
    // TODO: Genereer HTML voor alle taken
    const takenHTML = taken.map((taak, index) => `
        <div class="taak">
            ${taak/* jouw code hier - taak tekst */}
            <button onclick="verwijderTaak(${index})">🗑️</button>
        </div>
    `).join('');
    
    container.innerHTML = takenHTML;
    
    // TODO: Update teller
    document.getElementById('aantal-taken').textContent = taken.length;/* jouw code hier */;
}

function verwijderTaak(index) {
    // TODO: Verwijder taak op specifieke index
    taken.splice(index, 1/* jouw code hier */);
    
    // TODO: Sla taken op en update UI
    /* jouw code hier */;
    localStorage.setItem('taken', JSON.stringify(taken));
    toonTaken();
}

function wisAlleTaken() {
    if (confirm('Weet je zeker dat je alle taken wilt wissen?')) {
        // TODO: Maak array leeg
        taken = []; /* jouw code hier */
        
        // TODO: Verwijder uit localStorage
        /* jouw code hier - gebruik removeItem */;
        localStorage.removeItem('taken')
        toonTaken();
    }
}

// TODO: Initialisatie bij pagina laden
/* jouw code hier - gebruik addEventListener */;
document.addEventListener('DOMContentLoaded', () => {
    laadTaken();
    toonTaken();
});