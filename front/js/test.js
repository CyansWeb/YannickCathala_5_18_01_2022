/* JAVASCRIPT : LES BASES - Les VARIABLES et les TYPES */
var nom = "Mike"; //S t r i n g
console.log(nom)

let age = 30; //N u m b e r     (sans guillemets sinon ça fera un string)
console.log(age)


//B o o l e a n     (oui ou non = true ou false)
var ok = true;
var nok = false;
//var nom = null; // undefined
console.log(nok)


console.log(typeof(nom))
console.log(typeof(age))
console.log(typeof(ok))

//Caractère d'échappement
var film = "L'enfant";
var film2 = 'L\'enfant';
var film3 = "L\"enfant";

console.log("Le contenu de la var nom => " + film3)

/* JAVASCRIPT : CONDITIONS (OPÉRATEURS DE compa) */
// Les opérateurs retournent TRUE ou FALSE 

var ageTony = 25,
    ageSauzeat = 25,
    ageSasoeur = "25"; // ici on a du type number 25 et du string "25"

var compa1 = ageTony == ageSauzeat; // égal à
var compa2 = ageTony != ageSauzeat; // différent de
var compa3 = ageTony === ageSasoeur; // contenu et type égal à
var compa4 = ageTony !== ageSauzeat; // contenu OU type différent de
var compa5 = ageTony < ageSauzeat; // inférieur à
var compa6 = ageTony <= ageSauzeat; // inférieur ou égal à
var compa7 = ageTony > ageSauzeat; // supérieur à
var compa8 = ageTony >= ageSauzeat; // supérieur ou égal à

console.log("compa1 vaut " + compa1 +
    // pour un saut de ligne dans les LOG    \n
    "\ncompa2 vaut " + compa2 +
    "\ncompa3 vaut " + compa3 +
    "\ncompa4 vaut " + compa4 +
    "\ncompa5 vaut " + compa5 +
    "\ncompa6 vaut " + compa6 +
    "\ncompa7 vaut " + compa7 +
    "\ncompa8 vaut " + compa8
);




/* JAVASCRIPT : CONDITIONS (IF ELSE IF) */

// if (condition) et {accolade}
if (true) {
    console.log("mon code s'affiche ici")
}
if (false) {
    console.log("mon code ne passe jamais ici")
}


/* EXEMPLE */
var ageTony = 24,
    ageSauzeat = 25,
    ageSasoeur = 25;

var compa1 = ageTony == ageSauzeat;
var compa2 = ageTony != ageSauzeat;

var compa3 = false;
var compa4 = true;

if (compa1) {
    console.log("j'exécute le IF puisqu'il est true")
} else { // en rajoutant un ELSE j'aurai forcément une des 2 instructions qui va passer
    console.log("mon IF est faux alors j'exécute le else ")
}
//Si agetony = age sauzeat = (compa1) is TRUE = ça passe et on exécute le IF
//Si agetony différent de age sauzeat = (compa1) is FALSE = ça passe PAS mais on exécute alors dans le ELSE




/* EXEMPLE 2 */
var ageTom = 24,
    ageJerry = 25,
    ageTiti = 24;

var compa1 = ageTom == ageJerry;
var compa2 = ageTom != ageTiti;
var compa3 = ageTom != ageJerry;

var compa3 = false;
var compa4 = true;

if (compa1) {
    console.log("compa1 : ageTom n'est pas egal à Jerry donc FALSE et va dans le ELSE ")
} else if (compa2) {
    console.log("compa2 renvoie un FALSE aussi ")
} else {
    console.log("enfin le TRUE se trouve dans compa3 et affiche le ELSE final")
}





/* EXEMPLE 2 */
if (compa1 && compa3) { // Opérateur Logique ET
    //console.log("je passe ici")
}
/*  FALSE && FALSE = FALSE
    FALSE && TRUE = FALSE
    TRUE && FALSE = FALSE
    TRUE && TRUE = TRUE */

if (compa1 || compa3) { // Opérateur Logique OU
    //console.log("je passe ici")
}

if (!compa1) { // Opérateur Logique NOT (est l'inverse de)
    //console.log("je passe ici")
}

if (compa1 && compa || a || b) {
    console.log("je passe ici")
}