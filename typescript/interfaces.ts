// interface
 interface persona {
     nombre: string,
     apellido: string,
     edad: number,
     esSoltero: boolean
 }

interface correo{
    email?:string
}
interface trabajo extends correo, persona{
    nombreTrabajo: string
}
 const policia: trabajo = {
    apellido:'',
     edad: 2,  
     esSoltero: false, 
     nombre: '',
     nombreTrabajo: ''
 }

//  const valor = 1;
// //CASTEO  
// // AS
// //  valor as number;
// //  <tipoDato>
// <number>valor