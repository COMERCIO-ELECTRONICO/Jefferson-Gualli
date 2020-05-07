//funcion normal
function saludar(){
    return 'hola'
}
saludar()
console.log(saludar())

//funciones anonimas

var funcionAnonima = function(){
    return 'funcion aninima'
}
console.log(funcionAnonima())

//funciones fecha gorda  //funciones arrow fat function

var funcionFechaGorda = (a,b)=> {
return a+ b;
}
console.log(funcionFechaGorda(2, 3));

var json ={
    suma: (a, b) => {
        return a+ b
    }
}