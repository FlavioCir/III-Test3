//Realizza il testo utilizzando una FUNCTION e la tecnica del backtick:

function succo(mele, arance) {
    const succoDiFrutta = `Succo con ${mele} mele e ${arance} arance`;
    return succoDiFrutta;
}

document.getElementById('corretta').innerHTML = succo(4, 5);

document.getElementById('sbagliata').innerHTML = succo(6);

//Sempre utilizzando una FUNCTION e la tecnica del becktick, calcolare la prorpia età:

function calcoloEta(anni) {
    const eta = `${anni} anni`;
    return eta;
}

document.getElementById('eta').innerHTML += calcoloEta(55);

// Creando una funzione freccia, calcolare l'anno di nascita di due persone a partire dall'età:

calcoloAnno = (nome, anno) => {
    const annoNascita = `L\'anno di nascita di ${nome} è il ${anno}`;
    return annoNascita;
}

document.getElementById('persona1').innerHTML = calcoloAnno('Anna', 2022 - 30);
document.getElementById('persona2').innerHTML = calcoloAnno('Maria', 2022 - 24);

//Utilizzando una funzione come argomento di un'altra funzione, realizzare il testo sottostante:

let aFette = fettine();
aFette();

function fettine() {
    return function() {
        let fetteMela = 9;
        let fetteArancia = 15;

        document.getElementById('torta').innerHTML = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia`;
    }
}

//Compilando i seguanti campi di input, calcolare e stampare l'ammontare dell'acquisto degli articoli indicati:

var btn = document.getElementById('calcola')

btn.addEventListener('click', function() {
    let uno = Number(document.getElementById('cibo').value); //Number definisce che quel valore è un NUMERO
    let due = Number(document.getElementById('detersivi').value);
    let tre = Number(document.getElementById('abiti').value);

    let tot = uno + due + tre;

    document.getElementById('totale').innerHTML += tot;
});

