var arregloNumero = [1, 2, 3, 4]
// console.log(arregloNumero)

//indexOf, encuetra el indice del elemento
//console.log(arregloNumero.indexOf.Of(0))

//añadir elemento

//console.log(arregloNumero.push(10))
//console.log(arregloNumero)
// accender elementos

// console.log(arregloNumero[2])

// slice y splice  
//slice => decidir el vertor oroginal (dividir un vector pero el original queda intacto)
 

var arregloSlice = arregloNumero.slice(0, 1)
// console.log(arregloSlice);
// console.log(arrregloNumero);

// splice => cuantos valores vamos a eliminar

// var arregloSplice = arregloNumero.splice(0,2)

// console.log(arregloSplice);
// console.log(arregloNumero);

// Pop => elimina ultimo elemento

//console.log(arregloNumero.pop())
//console.log(arregloNumero)

var arreglo2 = [1, 2, 3, 4];
/*arreglo2
    .forEach(
        function (item, indice, arreglo) {
            console.log('item: ' + item);
            console.log('indice: ' + indice);
            console.log('arreglo: ' + arreglo);
        }
    )*/

// map => returno arreglo, muta al arreglo o lo modifica
/*var arregloMutado = arreglo2
    .map(
        (item, indice, arreglo) => {
            console.log(item)
            if (item === 2) {
                return item + 2;
            }
            return item + 1;
        }
    )
console.log(arregloMutado);*/

// filter => retorna arreglor dependien de la condicion

/*var arregloFilter = arreglo2
    .filter(
        (item, valor, arreglo) => {
            return item < 3
        }
    )
console.log(arregloFilter);*/

// find => retorn un valor
/*var valorFind = arreglo2
    .find(
        (item, indice, arreglo) => {
            return item === 1
        }
    )
    console.log(valorFind);*/

// every y some
// every verifica si todo los valores cumplen una condicion 
// true, false
// some verifica si almenos uno cumplen una condicion 


var operadoresMapyFilter = arreglo2
    .map(
        (item) => {
            return item * 2;
        }
    ).filter(
        (item) => {
            return item == 4
        }
    ).map
console.log(operadoresMapyFilter)