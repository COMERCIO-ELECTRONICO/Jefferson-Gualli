// Primer  Ejercicio del Deber "Invertir la palabra:"COMERCIO-ELECTRONICO"

var palabra = "COMERCIO-ELECTRONICO";
var palabrarevertida = "";
   
//Itero la cadena de manera inversa
for(var i = palabra.length-1; i>=0; i--)
{
  //Voy concatenando el valor a la palabra resultado
  palabrarevertida += palabra[i];
}
console.log(`Palabra Original: ${palabra}\n Palabra Revertida: ${palabrarevertida}  `)

//SEGUNDO EJERCIO DEL DEBER 
/* UTILICEN FUNCIONES
- primera palabra en mayuscula
- la palabra de la mitad en mayuscula
- ultima palabra  en mayuscula
- sumar todos los punto
- sumar todos las comas */

var texto = "Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle)."


var puntos = texto.split(".") 
var comas =texto.split(",")

var primeraPalabra = texto.split(" ")[0].toUpperCase();

var ultimaPalabra = texto.split(" ");

var Palabraultima = ultimaPalabra[ultimaPalabra.length - 1].toUpperCase();

var palabraMitad = texto.split(" ");

var mitadPalabra = palabraMitad[(palabraMitad.length - 1) / 2].toUpperCase();

console.log("Primera palabra: " + primeraPalabra);
console.log("Ultima palabra: " + Palabraultima);
console.log("Palabra de la mitad: " + mitadPalabra);

console.log(`puntos:  ${puntos.length} comas: ${comas.length} `);


