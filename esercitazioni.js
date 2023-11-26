function prova(a, b) {
    return a + b;
}

let risultato = prova(10, 20);
let ciao = "sono una modifica"aaaaa
let risultato = 10 + 20
console.log(prova);

function resto(a, b) {
    return a % b;
}

let risultato = resto(11, 2);



let numero = 111;

numero %= 2;

console.log(numero);


function maggioreOMinore(x, y) {
    return x > y
}

let risultato = maggioreOMinore(10, 20);
risultato = maggioreOMinore(20, 10)
console.log(risultato);

// // Ottieni il riferimento all'elemento input e al bottone
// const inputField = document.getElementById('inputField');
// const addButton = document.getElementById('addButton');
// const taskList = document.getElementById('taskList');

// // Funzione per segnare un'attività come completata


// // Aggiungi un'azione al click del pulsante "Aggiungi"
addButton.addEventListener('click', function () {
    const taskText = inputField.value;
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    //     // Aggiungi un'azione al click su un'attività per segnarla come completata
    //     newTask.addEventListener('click', markAsCompleted);

    taskList.appendChild(newTask);
    inputField.value = '';
});

function markAsCompleted(event) {
    const selectedTask = event.target;
    selectedTask.classList.toggle('completed'); // Aggiunge o rimuove la classe "completed" all'elemento cliccato
}


//---------------------------------------------//

//Funzioni 
// 1) Blocchi di codice riutilizzabili
// 2)Funzioni del browser String.replace, array.join, math.random,
// 3)Funzioni e Metodi
// 4)Invocare una funzione
// 5)Funzioni anonime 
// 6)Scope e conflitti (scope globale e scope locale)
// 7)Innestare funzioni
// 8) Parametri funzione

/*Le funzioni sono blocchi riutilizzabili la quale sono previste sempre le stesse metodologie
un esempio sono le funzioni già inserite all'interno del browser "string.replace" 
controlla la stringa, cerca il nome da sostituire, sostituisci il nome. **/

let nome = "Tino";
console.log(nome.replace);

/*La differenza tra funzioni e metodi, è una differenza di circostanza ovvero, le funzioni all'interno di un oggetto sono metodi. 
Le funzioni al di fuori di un oggetto sono banali funzioni.
**/

Invocare una funzione

function ciao() {
    console.log("ciao");
}

ciao();

/*Le funzioni anonime sono funzuioni senza nome che le andiamo ad inserire in determinati contesti
esempio:*/
const mybuttin = document.querySelector("button");
mybuttin.onclick = function () {
    alert("hello");
}

/* Le funzioni hanno uno scope, e se all'interno di questo scope (quindi all'interno della funzione) andassimo a mettere
una variabile, quest'ultima fa parte dello scope locale della funzione, quini non sarà possibile chiamarla all'esterno.*/
function ciao() {
    let nome = "Tino";
    console.log("ciao: ", nome);
}

/*I parametri delle funzioni si scrivono tra parentesi tonde dopo il nome della fuznione. Quindi poi ogni volta che andiamo a chiamare
la funzione essa si aspetta sempre un parametro.*/

function hello(name) {
    console.log(name);
}

hello(nome);

//innestare una funzione

let nome = "Tino";
function ciao() {
    let cognome = "Di Costanzo";
    console.log("ciao: ", nome);
    hello(cognome);

}

function hello(name) {
    console.log("hello ", name);
}

ciao();


// Altro esempio di funzione innestata

function generaTabella() {
    generaHeader();
    generaRow();
    generaFooter();

    console.log("tabella generata");
}

function generaFooter() {
    console.log("footer generato");
}
function generaRow() {
    console.log("Row generato");
}
function generaHeaderr() {
    console.log("Header generato");
}

generaTabella()

//----------------------------------------------------------------

//creare una funzione custom

/*  1) Creare una funzione basica
    2)Usarla nel codice
    3)Aggiungere parametri
    4)parametri di default
*/

//Funzione base

let button = document.querySelector("button");
let title = document.querySelector("h1");

function saluta() {
    title.innerHTML = "Cia Tino";
}

button.addEventListener("click", () => {
    saluta();
});

//--------------------------------------------------------

let button = document.querySelector("button");
let title = document.querySelector("h1");
let nome = document.querySelector("input");

function saluta(name) {
    title.innerHTML = `Ciao ${name}`;
}

button.addEventListener("click", () => {
    saluta();
});

// Se nel paramentro aggiungiamo (name = "Tino") abbiamo impostato un parametro di default.
//Se nel parametro di saluta mettiamo (name.value) allora otteniamo il valore dell'input.

//-------------------------------------------------------------------------------------------------------

//Return delle funzioni
let button = document.querySelector("button");
let title = document.querySelector("h1");
let nome = document.querySelector("input");

function cubo(number) {
    let result = number * number * number;
    return result;
    console.log(result);
}
button.addEventListener("click", () => {
    title.innerHTML = cubo(number.value);
});

//-----------------------------------------------------------------------------------------------------------

/* Eventi
    1) Cosa sono gli eventi
    2) Eventi handler button.onclick
    3) Inline event handlers
    4) AddEventListener() e RemoveEventListener()
    5) Oggetto Event
    6) e.preventDefault()
    7) Event bubbling e capturing (stop propagation)
    8) Event delegation (accennare)
*/

//gli eventi sono cose che succedono sulla pagina da parte dell'utente
/* handler sta per gestore di eventi, che si definisce in risposta ad un evento.
gli  handlers event possono essere anche scritti inline nell'html ( ma sconsigliato)
*/

nome.addEventListener("focus", function (e) {
    console.log("sono in focus dal listener");
    console.log(e.target);
    console.log(e.target.value);
})

// e.preventDefault()
const form = document.querySelector("form");
const nome = document.getElementById("fname");
const form = document.getElementById("lname");
const form = document.querySelector("p");

form.onsubmit = function (e) {
    if (nome.value === "" || cognome.value === "") {
        e.preventDefault();
        paragrafo.textContent = "You need to fill in both names!";
    }
}

// e.preventDefault()
/* event bubbling è una propagazione di eventi a catena come quando lanciamo un sasso nell'acqua e si propagano tutte le onde.
quindi parte dal centro verso l'esterno
event capturing è l'effetto contrario dall'esterno verso l'interno.
*/

//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

/* Oggetti
    1) che cos'è un oggetto, proprietà, metodi
    2 creare un oggetto, leggere le proprietà
    3) dot notation e bracket notation
    4) aggiornare un oggetto
    5) la chiave this
*/

//Gli oggetti sono una rappresentazione in codice di un oggetto reale, ad esempio una persona. Quindi contiene tutte le proprietà collegate logicamente tra di loro.

const persona = {
    nome: "Tino",
    cognome: "Di Costanzo",
    eta: "33",
    genere: "maschio",
    interessi: ["javascript", "python", "qa"],
    indirizzo: {
        via: "pandola",
        citta: "Somma Vesuviana",
        cap: "80049",
        provincia: "Napoli",
    },
    saluta: function () {
        console.log(`ciao sono ${persona.nome}`)
    },
}
// leggere una proprieta.

console.log(persona.nome);
console.log(persona.interessi[0]);
console.log(persona.indirizzo.cap);
//funzione(metodo) di un oggetto 
persona.saluta();

// dot notation e bracket notation

console.log(persona.nome);  //<-- dot notation

console.log(persona["nome"]); //<-- bracket notation(solo per proprieta)

//la differenza tra le due notation: se non ho bisogno di prendere qualcosa dinamicamente uso la dot notation 
// per prendere una proprieta dinamicamente(cioe qualcosa che l'utente va a modificare ma non lo so) dichiaro una variabile esterna
const chiave = "interessi";
console.log(persona[chiave][0]);


//aggiornare un oggetto

persona.nome = "Luca";

//in questgo modo andiamo a modificare la proprieta di un oggetto ma non la natura stessa dell'oggetto anche se e una constante

// aggiungi una proprieta ad un oggetto
persona.colorePreferito = "verde",

    // la parola chiave this fa riferimento all'oggetto in cui si trova

    console.log(`ciao sono ${this.nome}`);


// -----------------------------------------------------------------------------------------------------------------------
//OPP Programmazione ad oggetti-
// con un unico "stampino" andiamo a creare piu oggetti con diverse proprietà

function Persona(nome, cognome, eta, genere, interessi) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.genere = genere;
    this.interessi = interessi;
    this.bio = function () {
        console.log(`${this.nome} ${this.cognome} è
        ${(this.genere == "Maschio") ? "un ragazzo" : "una ragazza"} di ${this.eta} anni
        a cui piace ${this.interessi.join(", ")}`);
    };
    this.saluta = function () {
        console.log(`ciao sono ${this.nome}`);
    };
}


const persona1 = new Persona("Luca", "Rossi", 23, "maschio", ["calcio", "basket"]);
const persona2 = new Persona("Anna", "Rossi", 19, "Femmina", ["letteratura", "musica"]);

console.log(persona1);
console.log(persona2);

//--------------------------------------------------------------------------------------------
// Classi ed ereditarietà

function Persona(nome, cognome, eta, genere, interessi) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.genere = genere;
    this.interessi = interessi;
    this.saluta = function () {
        console.log(`ciao sono ${this.nome}`);
    };
}

function Insegnante(nome, cognome, eta, genere, interessi, materia) {
    Persona.call(this, nome, cognome, eta, genere, interessi);
    this.materia = materia;
    this.saluta = function () {
        console.log(`Buongiorno sono ${this.nome} ${this.cognome}`);
    };
};

const insegnante = new Insegnante("anna", "blu", 44, "femmina", ["netflix"], "storia");
console.log(insegnante);
insegnante.saluta();

//Classi ____________________________________

class Persona {
    constructor(nome, cognome, eta, genere, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.genere = genere;
        this.interessi = interessi;
    }
    saluta() {
        console.log(`ciao sono ${this.nome}`);
    };
}

class Insegnante extends Persona {
    constructor(nome, cognome, eta, genere, interessi) {
        super(nome, cognome, eta, genere, interessi);
        this.materia = materia;
    }
    get materia(nuovaMateria) {
        return this._materia;
    }

    set materia(nuovaMateria) {
        this._materia = nuovaMateria;
    }


    riprendiAlunno(nomeAlunno) {
        console.log(`${nomeAlunno} non si mangia in classe`);
    }
}
const insegnante1 = new Insegnante("anna", "blu", 44, "femmina", ["netflix"], "storia");
console.log(insegnante);
insegnante.materia = "matematica"
console.log(insegnante.materia);