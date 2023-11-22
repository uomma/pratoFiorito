'use strict'

/*******
 * FUNCTIONS
 ********/

function creaCella(htmlElement, className, htmlValue) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;

    element.addEventListener('click', function () {
        alert(htmlValue)
    })
    return element

}

function myAppendElement(containerElement, htmlElement) {
    containerElement.append(htmlElement);
};

function reset(htmlElement) {
    htmlElement.innerHTML = '';
};

function creaGriglia(cellNumber) {

    let fragmentGriglia = document.createDocumentFragment();

    for (let i = 1; i <= cellNumber; i++) {
        //3.1creo la cella
        const element = document.createElement('div');
        element.classList.add('cell');
        element.style.width = `calc(100%/${Math.sqrt(cellNumber)})`;
        element.style.height = element.style.width;


        element.addEventListener('click', function () {
            console.log('cliccato');
            const cellNumber = Number(this.innerHTML);
            function colore(listaBombe) {
                if (listaBombe.includes(cellNumber)) {
                    element.classList.add('esplosione');
                }
            } return colore(listaBombe)


        })
        element.innerText = i;
        fragmentGriglia.append(element);
    }

    return fragmentGriglia;
};


function campoMinato() {

    //1creo griglia
    const contenitoreGrilia = document.querySelector('.griglia');
    reset(contenitoreGrilia);

    //2prendo contenitore griglia
    //devo collegare il menu a tendina con la rispettiva classe di caselle 


    //per leggere valore di un campo di input usi VALUE
    //il case utilizza operatore di identicita per confrontare i valori, due opzioni:

    //1) o tutti input dati dal utente li trasformiamo in numeri
    let level = Number(document.getElementById('difficolta').value);

    console.log(level)

    switch (level) {
        //2) o dentro lo switch dovranno esserci dei confronti di tipo stringa: ex-. case '2' non case 2
        case 2:
            cellNumber = 81;

            break;
        case 3:
            cellNumber = 49;
            break;
        case 1:
        default:
            cellNumber = 100;
    }

    console.log(cellNumber)



    //3definisco num celle iniziali
    const fragmentGriglia = creaGriglia(cellNumber);

    contenitoreGrilia.append(fragmentGriglia)

    //generazione bombe


    while (listaBombe.length < 16) {
        let bombe = Math.floor((Math.random() * cellNumber) + 1);


        if (!listaBombe.includes(bombe)) {
            listaBombe.push(bombe)
        }
    }

    console.log({ listaBombe })



    //4per ogni numero di celle creo cella
    //5appendo cella a contenitore di gioco


}
/**** 
LOGICA GIOCO
****/
//il computer deve generare 16 numeri casuali nel rango della difficolta preseclta


//1 genera bombe
//2 genera num random
//3 controllo numero
//se clicco su una bomba diventa rosso
//array numeri casuali lungo 16
//ciclo che riempie array-while(bomblist<16)
//randomici(function)
//che non si ripetano





/**** 
MAIN
****/


//identifico il bottone che compierà l'azione andandolo a selezionare tramite il suo ID
const startButton = document.getElementById('start');

//aggiungo il fatto che al click scatenerà un evento
startButton.addEventListener('click', campoMinato)


let cellNumber;
let listaBombe = [];
let bombe;