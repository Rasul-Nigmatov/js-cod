//Number

/* let a = 5;
let b = 6;
let variables = 330
const sum = a + b;
console.log(sum + variables)

const aka = 9;
const Bratan = aka;
console.log(Bratan)

let c = "Hormela okala"
let d = "Salomat bol ukajonim"
let e = c + d
console.log(e = c + d)
 */
//String
/* const Text = "Assalomu alekum"
console.log(Text)
const text = "Valekum Assalom "
console.log(text) */

//STRING
/* const tex = "Bratan";
let number = " Nma gap";
console.log(tex + number) */

//String
/* const f = 1;
const g = 2;
const h = "5";
console.log(( g + f) + h)
//STRING
const i = 1;
const j = 5;
const k = "5"
console.log( i + j + k)
//Stringni rangi tuzilishi
const l = "9"
console.log(i) */

/* const UserTxt = Number(prompt("Yoshingizni kiriting !"))
alert (UserTxt)
console.log (UserTxt)

const userText = (prompt("Ismingizni kiriting"))
alert (userText)
console.log (userText) */

//Vazifa sinf iwi

/* const UserTxt = Number(prompt("1 chi sonni kiriting"))

const userText = Number(prompt("2 chi sonni kiriting"))

alert("Sizning Jovobingiz: " + (UserTxt + userText) + " boladi deb tog`ri oylayman") */

//Ikkinchi sinf ishi

/* const UserName = prompt("Ismingizni kiriting")

const LastName = prompt("Familyangizni kiriting")

alert("Sizzi ismingiz " + (UserName + " " + LastName) + " ekan") */

//String Number ga otaqazib beradi

/* const firsNumber = Number(prompt("birinchi sonni kiriting")); 
const secondNumber = Number(prompt("ikkinchi sonni kiriting"));

alert(firsNumber + secondNumber) */



//uy ishi 

let elResult = document.querySelector(".result")

let USD = 9433;

let EURO = 10354;

const UserBudjet = Number(prompt("Iltomis pul miqdorini kiriting!", 0 ))

let card = 500;

let hospital = 250;

let mesium = 120;

let total = (card + hospital) * UserBudjet * ( mesium * EURO) 

if (UserBudjet >= total) {
    elResult.textContent = "Alisher oka pulingiz ozgina etmayapti"
} else if (UserBudjet< 0 || UserBudjet == "") {
    alert("Iltimos 0 dan kotta son kiriting !");
} else {
    elResult.textContent = "Alisher oka oq yol"
} 


