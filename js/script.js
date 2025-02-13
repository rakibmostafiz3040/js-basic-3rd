// The add method
const letters1 = new Set(["a","b","c"]);
letters1.add("d");
letters1.add("e");
document.getElementById("tam").innerHTML= "The set has" +  letters1.size  + "values"
// set method
const letters = new Set(["a","b","c","d"]);
document.getElementById("nsm").innerHTML = "The set has"  + letters.size +  "values.";
//  Loop with continue statement
let text22 ="";
for(let i=0; i<10; i++){
  if(i===4) {continue;}
  text22 += "The number is" + i + "<br>";
}
document.getElementById("cnt").innerHTML= text22;
// A loop with a break statement
let text21 ="";
for(let i=0; i<7; i++){
if(i===5) {break;}
text21 += "The number is" + i +"<br>";
}
document.getElementById("br").innerHTML= text21;
// The do while loop
let texta = ""
let k = 0;

do {
  texta += "<br>The number is " + k;
  k++;
}
while (k < 4);  

document.getElementById("dwloop").innerHTML = texta;
// while loop
let textb = "";
let j = 0;
while (j < 7) {
  textb += "<br>The number is " + j;
  j++;
}
document.getElementById("wloop").innerHTML = textb;
// for in
const numbers2 = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers2) {
  txt += numbers2[x] + "<br>"; 
}

document.getElementById("fin").innerHTML = txt;
// loop scope
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
document.getElementById("lc").innerHTML = i;
// For loop
let textc = "";

for (let i = 0; i < 5; i++) {
  textc += "The number is " + i + "<br>";
}

document.getElementById("floop").innerHTML = textc;
// looping
const ca = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let textd = "";
for (let i = 0; i < ca.length; i++) {
  textd += ca[i] + "<br>";
}

document.getElementById("looping").innerHTML = textd;
//  Default in switch expression
let texte;
switch (new Date().getDay()) {
  case 6:
    texte = "Today is Saturday";
    break;
  case 0:
    texte = "Today is Sunday";
    break;
  default:
    texte = "Looking forward to the Weekend";
}
document.getElementById("dswitch").innerHTML = texte;
// The switch expression
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("switch").innerHTML = "Today is " + day;
// The else is statement
const time = new Date().getHours();
let greetin;
if (time < 10) {
  greetin = "Good morning";
} else if (time < 20) {
  greetin = "Good day";
} else {
  greetin = "Good evening";
}
document.getElementById("ei").innerHTML = greetin;
// if else statement
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("else").innerHTML = greeting;
// if statement
if (new Date().getHours() < 18) {
    document.getElementById("if").innerHTML = "Good day!";
  }
// js method pie 
document.getElementById("pie").innerHTML = Math.PI;
// date method
const d = new Date();
document.getElementById("dat").innerHTML = d;
// sort method
const fr = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sort1").innerHTML = fr;

fr.sort();
document.getElementById("sort2").innerHTML = fr;
// -- push method of array --
const froot = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("shift1").innerHTML = froot;
froot.shift();
document.getElementById("shift2").innerHTML = froot;
// -- push method of array --
const froo = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("push1").innerHTML = froo;
froo.push("Kiwi");
document.getElementById("push2").innerHTML = froo;
// pop method 
const fru = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("pop1").innerHTML = fru;
fru.pop();
document.getElementById("pop2").innerHTML = fru;
// join method
const fruitika = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("join").innerHTML = fruitika.join(" * ");
// index element
const fruitt = ["Banana", "Orange", "Apple", "Mango"];
let fruito = fruitt.at(2);

document.getElementById("fr").innerHTML = fruito;
// The length property
const numbers = ["One", "Two", "Three", "four, five"];
let siz = numbers.length;
document.getElementById("num").innerHTML = siz;

//show text
function showTex(){
    document.getElementById('st').innerHTML = "Hello there";
}
//mouse enter
function showText(){
    document.getElementById('me').innerHTML = "Hello there";
}
//on mouse over
function showTe(){
    document.getElementById('mo').innerHTML = "Hello there";
}
//show date
function showDate(){
    document.getElementById('sd').innerHTML = Date();
}
//text change
function changeText(){
    document.getElementById('tc').innerHTML = Date();
}
//bulb on/off
function bulbOn(){
    document.getElementById('img').src="images/on.gif"
}
function bulbOff(){
    document.getElementById('img').src="images/off.gif"
}
//bulb on/off
function bulbOn(){
    document.getElementById('img').src="images/on.gif"
}
function bulbOff(){
    document.getElementById('img').src="images/off.gif"
}
//change images
function bookOne(){
    document.getElementById('book').src="images/book4.png"
}
function bookTwp(){
    document.getElementById('book').src="images/book.png"
}
//swap images
function bookOn(){
    document.getElementById('boo').src="images/pf3.png"
}
function bookTw(){
    document.getElementById('boo').src="images/pf4.png"
}
//text change
function changeCss(){
    document.getElementById('cc').style.color = "red";
}
//show/hide
function cShow(){
    document.getElementById('sh').style.display="block";
}
    function cHide(){
        document.getElementById('sh').style.display="none";
    }
    // on mouse down event
    function mouseDown() {
        document.getElementById("omd").style.color = "red";
      }
      
      function mouseUp() {
        document.getElementById("omd").style.color = "blue";
      }
    //    <!-- on mousemove event -->
    function myFunction(e) {
        let x = e.clientX;
        let y = e.clientY;
        let coor = "Coordinates: (" + x + "," + y + ")";
        document.getElementById("omm").innerHTML = coor;
      }
      
      function clearCoor() {
        document.getElementById("omm").innerHTML = "";
      }
    //   JavaScript Statements
 let x,y,z;  // Statement 1
x = 5;        // Statement 2
y = 46;        // Statement 3
z = x + y;    // Statement 4

document.getElementById("jst").innerHTML =
"The value of z is " + z + "."; 
// Multiple statements on one line
let a, b, c;
a = 5; b = 36; c = a + b;
document.getElementById("ms").innerHTML = c;
// JavaScript Operators
document.getElementById("jo").innerHTML = (5 + 56) * 10;
// Expression
document.getElementById("demo").innerHTML = 5 * 10;
// JavaScript Variables
x = 25;
y = 6;
z = x + y;
document.getElementById("jv").innerHTML =
"The value of z is: " + z;
const m = 15;
const n = 16;
const o = m + n;
document.getElementById("jvc").innerHTML =
"The value of z is: " + o;

// <!-- Arithmetic Operations -->
let l = 3;
let s = (100 + 5) * l;
document.getElementById("jva").innerHTML = s;
// conditional operators

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
document.getElementById("co").innerHTML = "Is A less than B? " + result;

//Object creating

// Create an Object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display Data from the Object:
document.getElementById("oc").innerHTML =
"The car type is " + car.type;
// object methods

const person = {
    firstName: "Rakib",
    lastName: "Mostafiz",
    id: 3040,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  document.getElementById("om").innerHTML = person.fullName();
//   strings

let carName1 = "Hino 1j"; // Double quotes
let carName2 = 'Hino 1j'; // Single quotes

document.getElementById("stg").innerHTML =
carName1 + " " + carName2;
// string length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZA";
document.getElementById("stgl").innerHTML = text.length;
// Iteger and BigIntn

let p = 999999991654621676216;
let q = BigInt("999999991654621676216");
document.getElementById("ib").innerHTML = p + "<br>" + q;
// Arrays

const cars = ["Hino", "Scania", "Tata"];
document.getElementById("arr").innerHTML = cars;
// Arrays length poperty

const fruits = ["Banana", "Orange", "Apple", "Mango","Pulm"];
let size = fruits.length;
document.getElementById("arrlp").innerHTML = size;


// bracket notation

const fruit = ["Banana", "Orange", "Apple", "Mango"];
let fruity = fruit[2];

document.getElementById("alp").innerHTML = fruity ;
// The sort method of array

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruitss;

fruitss.sort();
document.getElementById("demo2").innerHTML = fruitss;
// javascript booleans
document.getElementById("bol").innerHTML = 18 > 81;
            
