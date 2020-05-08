//arreglo uno, multiplique * 2, y me filtrar los pares, usar map y filter
var Uno= [2, 4, 5, 8, 6, 9, 10];

var arregloM = Uno.map(
        (item) => {
            
                return item * 2;
               
          }
    )
    console.log("///--- arreglo ---///")
    console.log(Uno);
    console.log("///--- multiplicacion *2 ---///")
    console.log (arregloM); 

   
var Filter = Uno
    .filter(
        (item) => {

 return item === 2 ||  item === 4 || item === 6 || item === 8 || item === 10 
            
            
        }
    )
    console.log("///--- Valores Pares ---///")
console.log (Filter); 



//Arreglo dos, filter los los impares , sumar + 2
  
var dos= [ { valor: 1 },
    { valor: 4 },
    { valor: 2 },
    { valor: 24 },
    { valor: 100 },
    { valor: 23 },
    { valor: 45 },
    { valor: 23 },
];

var filterImpares = dos
    .filter(
        (item) => {

 return item.valor === 1 ||  item.valor === 23 || item.valor === 45 || item.valor === 23 
            
            
        }
    )
    console.log("///--- Arreglo [2] filter los impares , sumar + 2---///")
console.log(dos);

    console.log("///--- Valores ImPares ---///")
console.log (filterImpares); 

var arreglomutado = dos.map(
    (item) => {
        
            return item.valor + 2;
           
      }
)

console.log("///---suma +2 ---///")
console.log (arreglomutado); 