var json ={
Nombre: 'jefferson',
Edad: 23,
Soltero: true,
Fecha: new Date(1997-07-16),
}
json.nombre = 'billy'
json.direccion= 'guamani'
console.log(json)
/*console.log()
console.log()
console.log()
*/


var json2 = {
    nombre: 'jefferson',
    edad: 25,
    soltero: true,
    fecha: new Date('1997/07/16'),
    interese: {
        hobbies: [
            'futbol',
            'ps4'
        ],
        peliculas: [
            {
                nombre: '',
                tipo: '',
                esBuena: true,
            },
            {
                nombre: '',
                tipo: '',
                esBuena: true,
            }
        ]
    },
    familia: [
        {
            nombre: '',
            edad: 1,
        },
        {
            nombre: '',
            edad: 1,
        }
    ]
}

// stringify (a nuestro objeto le hace todo tring)

var json2String = JSON.stringify(json2)
console.log(json2)
console.log(json2String)


//parse (pasar de estring a objeto)
 
var jsonParse = JSON.parse(json2String)
console.log(jsonParse)








