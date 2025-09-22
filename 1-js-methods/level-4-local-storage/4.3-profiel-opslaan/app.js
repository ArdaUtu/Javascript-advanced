// Opdracht 4.3: Profiel Opslaan
console.log('🚀 Opdracht 4.3: Profiel Opslaan');

function slaProfielOp() {
    // TODO: Haal alle waarden uit formulier
    const naam = document.getElementById('naam').value; /* jouw code hier */;
    const email = document.getElementById('email').value;/* jouw code hier */;
    const leeftijd = document.getElementById('leeftijd').value; /* jouw code hier */;
    const kleur = document.getElementById('kleur').value;/* jouw code hier */;
    
    // TODO: Valideer verplichte velden
    if (naam === '' && email === '')/* jouw code hier - check naam en email */ {
        alert('Naam en email zijn verplicht!');
        return;
    }
    
    // TODO: Sla elk veld apart op in localStorage
    localStorage.setItem('profiel-naam', naam );
    localStorage.setItem('profiel-email', email /* jouw code hier */);
    localStorage.setItem('profiel-leeftijd', leeftijd /* jouw code hier */);
    localStorage.setItem('profiel-kleur', kleur /* jouw code hier */);
    
    // TODO: Sla ook opslag datum op
    localStorage.setItem('profiel-opgeslagen', new Date().toLocaleString/* jouw code hier - gebruik new Date() */);
    
    alert('Profiel opgeslagen!');
    toonProfiel();
}

function laadProfiel() {
    // TODO: Haal alle waarden op uit localStorage
    const naam = localStorage.getItem('profiel-naam'); /* jouw code hier */;
    const email = localStorage.getItem('profiel-email');/* jouw code hier */;
    const leeftijd = localStorage.getItem('profiel-leeftijd'); /* jouw code hier */;
    const kleur = localStorage.getItem('profiel-kleur'); /* jouw code hier */;
    
    // TODO: Vul formulier als data bestaat
    if (naam) {
        document.getElementById('naam').value = naam; /* jouw code hier */;
    }
    
    if (email) {
        document.getElementById('email').value = email; /* jouw code hier */;
    }
    
    if (leeftijd) {
        document.getElementById('leeftijd').value = leeftijd; /* jouw code hier */;
    }
    
    if (kleur) {
        document.getElementById('kleur').value = kleur; /* jouw code hier */;
    }
}

function toonProfiel() {
    const container = document.getElementById('profiel-weergave');
    
    // TODO: Haal alle opgeslagen waarden op
    const naam = localStorage.getItem('profiel-naam')/* jouw code hier */;
    const email = localStorage.getItem('profiel-email') /* jouw code hier */;
    const leeftijd = localStorage.getItem('profiel-leeftijd') /* jouw code hier */;
    const kleur = localStorage.getItem('profiel-kleur') /* jouw code hier */;
    const opgeslagenOp = localStorage.getItem('profiel-opgeslagenOp') /* jouw code hier */;
    
    // TODO: Check of er profiel data is
    if (/* jouw code hier - check of naam bestaat */naam) {
        // TODO: Toon profiel gegevens
        container.innerHTML = `
            <h3>Opgeslagen Profiel:</h3>
            <p><strong>Naam:</strong> ${naam}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Leeftijd:</strong> ${leeftijd || 'Niet ingevuld'}</p>
            <p><strong>Favoriete kleur:</strong> ${kleur || 'Niet gekozen'}</p>
            <p><strong>Opgeslagen op:</strong> ${opgeslagenOp || 'Onbekend'}</p>
        `;
    } else {
        container.innerHTML = '<p>Nog geen profiel opgeslagen.</p>';
    }
}

function wisProfiel() {
    if (confirm('Weet je zeker dat je je profiel wilt wissen?')) {
        // TODO: Verwijder alle profiel items uit localStorage
        localStorage.removeItem('profiel-naam'/* jouw code hier - 'profiel-naam' */);
        localStorage.removeItem('profiel-email'/* jouw code hier - 'profiel-email' */);
        localStorage.removeItem('profiel-kleur'/* jouw code hier - 'profiel-leeftijd' */);
        localStorage.removeItem('profiel-leeftijd'/* jouw code hier - 'profiel-kleur' */);
        localStorage.removeItem('profiel-opgeslagenOp'/* jouw code hier - 'profiel-opgeslagen' */);
        
        // TODO: Maak formulier leeg
        document.getElementById('naam').value = '';
        document.getElementById('email').value = '';
        document.getElementById('leeftijd').value = '';
        document.getElementById('kleur').value = '';
        
        toonProfiel();
        alert('Profiel gewist!');
    }
}

// TODO: Initialisatie
function init() {
    laadProfiel();
    toonProfiel();
    /* jouw code hier - laad profiel en toon het */;
}

/* jouw code hier - roep init() aan bij DOMContentLoaded */;
document.addEventListener('DOMContentLoaded', init);