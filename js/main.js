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

/* let elResult = document.querySelector(".result")

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
}  */

//Qisqach yozish iwi console dagi qiymat

/* let user = 'O`zbekiston'
let uzb = "Ideal"

console.log(`${user} ${uzb} ${4 + 2 - 1}` ) */

//Uy ishi vazifasi Bolean

/* const a = Number (prompt("1chi sonni kiriting"));

const b = Number(prompt("2chi sonni kiriting"));

//Foulse beradigan qiymat    ""  0  NaN

if (a  &&  b) {
    
    const sum = Number(a) + Number(b);
    
    const discription = a - b;
    
    const separation = a / b; 
    
    const multiplication = a * b
    
    alert(`
    Yeg'indisi:  ${sum}
    Ayirmasi: ${discription} 
    Kopaytirilishi: ${multiplication} 
    Bolovi: ${separation}`)
    
}   else if (!a && b) {
    alert("Siz birinchi qiymattini notog`ri  kiritingiz")

} else if (a && !b) {
    alert("Siz ikkinchi qiymatini notog`ri kiritingiz")

} else {
        alert("Siz Son kiritshingiz kerak edisku")
        
    } */


/* if (a) {
    alert ("True keldi oka")
} */


// alert("Assalomu alekum oka " + "\n" + "Kuningiz hayrli otsin" + "\n" + "Bratan che tam" ) 

// console.log(typeof true) 

//Uy ishi

/* const title = document.querySelector (".result")

const money = prompt ("Bor pulingizni kiriting")

if (money) {
    const USD = 9433;
    
    const EURO = 10300;
    
    const HOTEL = 250;
    
    const CARD = 500;
    
    const ENTERTAMINET = 120;
    
    const expensesUzs =  (HOTEL  + CARD) * USD +ENTERTAMINET
    if (isNaN(money)) {
        title.textContent = "Noto'g'ri jovob"


        alert("Iltimos tog`ri qiymat kiriting")

    } else if (expensesUzs <= money) {
        alert("Ketishimiz mumkim")

    } else if (money < 0) {
        alert("bizni ahmoq qimohchimisan")

    } else {
        alert ("KEtish mumkin emas")
    } 
} */

/* const money = +prompt("Bor pulingizni kiriting")
 */


/* const form = document.querySelector(".form");
const input = document.querySelector(".form__usz-input");

const usdResult = document.querySelector(".usd-result");
const eurResult = document.querySelector(".eur-result");
const rubResult = document.querySelector(".rub-result");

const USD = 11560;

form.addEventListener("submit", function (evt){
    evt.preventDefault();

    const inputValue = input.value;

    usdResult.textContent = `USD:  ${inputValue / USD}`;
}) ; */
//Object
/* const desk = {
    oyoqlariSoni: 4,
    rangi: "oq",
    daraxti: "cinboy",
    mattaliBormi: true 
}

console.log(desk) */

const lukoil = {
    rezume: "Rezume elektron tarzda",
    doctor: "medosmotrdan o`tish kerak",
    name: "General director: Sayahov",
    Ai:  80,
    benzin: 7000,
    "min-ielts": 4,
    img: "https://repost.uz/storage/uploads/file_5ab09c6ea86578.296878731521523822.jpg",
    5: 5, // <== berilvotgasn payta console dagi qoussi icida oddiy qous ocilada masalan [  ];

    rector: {
        name: "doctor mr falonchi",
        age: 50 
    }
}
/* console.log(lukoil["min-ielts"]) */


//dom dan kelgan narsadan faqat gina wu yoldia keliladi
const title =   "minIELTS";

console.log(lukoil.rector.name); 

const container = document.querySelector(".container");
const content = document.querySelector("content")

const lukoilArticle = document.createElement("article");
lukoilArticle.className = "lukoil-article";
lukoilArticle.id = "lukoil-1";


const lukTitle = document.createElement("h2");
lukTitle.textContent = lukoil.name;
lukTitle.className = "lukoil-title";



const lukDiscrip = document.createElement("p");
lukDiscrip.className = "lukoil-discrip";
lukDiscrip.textContent = lukoil.rezume;

let lukContent = document.createElement("div")
lukContent.className = "lukoil-title";

const lukDiscription = document.createElement("p");
lukDiscription.className = "lukoil-discription";
lukDiscription.textContent = lukoil.benzin

const lukText = document.createElement("p")
lukText.className = "lukoil-text";
lukText.textContent = lukoil.Ai

const lukImg = document.createElement("img");
lukImg.className = "lukoil-img";
lukImg.src = lukoil.img;

container.append(lukoilArticle);
lukoilArticle.append(lukTitle);
lukoilArticle.prepend(lukDiscrip);
lukoilArticle.append(lukContent)
lukContent.append(lukDiscription)
lukContent.append(lukText)
lukoilArticle.append(lukImg);




const anjir = {
    menu: "assorti",
    price: "22000",
    all: "hammasi",
    img: "https://lh3.googleusercontent.com/-rkZ6GIcR4KQ/YC4R76CR_JI/AAAAAAAAhCY/fgatMnKxSHULJYusCt6xNz04Yq82lEhagCJUFGAYYCw/w768-h768-n-o-k-v1/"
}
const wrapper = document.querySelector("wrapper");

const anjirArticle2 = document.createElement("article2");
anjirArticle2.className = "anjir-article";

const anjTitle = document.createElement("h2");
anjTitle.className = "anjir-title";
anjTitle.className = anjir.menu
/* anjirTitle.textContent = anjir.menu; */
const anjImg = document.createElement("img");
anjImg.className = "anjir-img";
anjImg.src = anjir.img;

wrapper.append(anjirArticle2)