var variablel;
let variable2;
const variable3 = 2;
//contener letras, números,
var $jquery, _private;

//empezar por números o contener espacios
var fiftycent = 1, estonovale = 1;
// Son case sensitive
var variable = 2, VARIABLE = 2;
// Mayoritariamente se usa camelCase, pero también se usa snake_case
var camelCase = 2, snake_case = 2;
// Se recomienda declarar una variable por línea
var camelCase = 2;
var snake_case = 3;


var miVariable;
let mi0traVariable;

miVariable = 2;
miOtraVariable = 2;

var mivariable = 42;
let miOtraVariable = miVariable;
// var nos permite acceder a una variable antes de inicializarla
console. log(miVariable); //undefined
var mivariable = 2;
console. log (miVariable); //2
// let en cambio...
console. log (miltraVariable); //Uncaught ReferenceError: miltraVariable is not defined
let miotraVariable = 2;
console. log (miltraVariable);
const estoNoDaraProblemas = 42
// Una variable declarada con const, no puede cambiar su valor.
const estoTambienFallara = 2;
estoTambienFallara = 3; // Uncaught TypeError: Assignment to constant variable.


//Conocer tipos de variables

//como obtener el tipo de una variable
typeof miVariable; 
//comrpobar el tipo de una variable
variable instanceof clase;

//undefied
typeof undefined;

//object 
typeof null;
typeof {key: 2};
typeof [15, 4];
typeof new Date();

//bolean
typeof true;
typeof false;
typeof new Boolean(true);

//string
typeof "hola";

//number
typeof 1;
typeof 1.5;
typeof NaN;
typeof Infinity;

//simbolo
typeof Symbol();
typeof Symbol("mi simbolo");


//Aritmetica Basica

//operador suma 
const suma = 2 + 2;

// operador restar
const resta = 2 - 2;

// operador multiplicacion
const multiplicacion = 2 * 2;

// operador división
const división = 2 / 2;

// operador modulo
const modulo = 2 % 2;

// operador potencia
const potencia = 2 ** 2;

//  Operador de suma para lo siguiente
const concatenarString = "Hola" + "mundo";

//y aunque esto puede ser util...
const sumaStringYNumero = 1 + "2";

//pueden ocurrir cosas como esta
const banana = "b" + "a" + + "a";

//Las operaciones aaritmeticas van de izquierda a derecha en js.
//El operador de exponenciacion es el unico que va de derecha a izquierda.
// Los operdores aritmeticos tienen el siguiente orden de pioridad:
// () > * > / > % > + > -
const expresion = (3 + 2) * 10;
const expresion2 = 3 + 2 * 10;
const expresion3 = 3 ** 2 **3;

//Al igual que las matematicas u otros lenguajes de programacion
// el orden improta. Estos operadores son los que mas piroidad tienen
let inicio = +5;
const sumaYasigna = ++inicio;
const asignaYSuma = inicio++;
const restaYasigna = --inicio;
const asignaYResta = inicio--;
console.log(inicio);

let x = 1;
let y = 2;
let z = 3;
x = y;
x+=z;
x*=y;
x/=y;
x%=x;

//Logica

//Los operadores logicos tambien siguen las normas de la precendencia de operadores.
//Casi todos van de izquierda a derecha, exceptuando el operador NOT, que va de derecha a izquierda.
const masFalsoQueSalvame = !true;

//El operador ADN (AND) es el que mas piroidad tiene
const cherto = true && true;
let noECherto = false && true;
noECherto = false && false;
noECherto = true && false;

let certo = true || true;
eCherto = false || false;
eCherto  = true || false;
const noeCherto = false || false;

//Comparacion

//Los operadores de comparacion tambien van de izquierda a derecha
const mayorQue = 2 > 1;
const menorQue = 2 < 1;
const mayorOgual = 2 >= 1;
const menorOgual = 2 <= 1;
const igualOcasi= 2 == "2";
const igualYDelMismoTipo = 2 == 2;
const noigual = 2 != 2;

//mas ejemplos de esto:
1 == '1';//verdadero
1==='1' ;//falso
false == 0;//verdadero
false === 0;//falso
''==0;//verdadero
''===0;//falso

//Control de flujo if/else 

/* IF ... ELSE
    if (algo verdadero) {
     ejecutar este codigo
} else {
    Si lo anterior no es verdadero ejecutar este codigo
}; */

if (true) {
    console.log("true, por eso me ejecuto");
}else{
    console.log("false, por eso no me ejecuto");
}

//Podemos poner condiciones intermedias
const miNumero = prompt("Que numero estoy pensando?");
if(miNumero < 5) {
    alert("MiNumero es bastante pequeño");
}else if(miNumero > 5) {
    alert("MiNumero se ha pasado");
}else{
    alert("MiNumero es5");
}

/* switch
    switch (variable) {
        case valor1:
            ejecutar este codigo
            break;
        case valor2:
            ejecutar este codigo
            break;
        default:
            ejecutar este codigo
    }
            */

let numero = print("Que numero estoy pensando?");
switch(numero) {
    case "5":
        alert("Es 5");
        break;
    case "4":
    case "6":
        alert("Casi aciertas");
        break;
    default:
        alert("Es otro numero");
        break;
}

/*while
    while (condicion) {
        ejecutar este codigo
    }
    */

let edad = prompt("Que edad tienes?");
while(edad <=18){
    alert("No puedes ir a la universidad");
    edad = prompt("Que edad tienes?", 0);
}

/*for
    for (inicio; condicion; incremento) {
        ejecutar este codigo
    }
    */

for(let i = 0; i < 10; i += 1){
    console.log(i);
}

//a veces nos olvidamos de que tambien existe la resta
for(let i = 0; i < 10; i -= 1){
    console.log(i);
}

//Las expresiones en for no tienen por que ser individuales
for(let i = 10, j = 0; i>j; i -=1){
    console.log(i, j);
}
