// destructuracion de arrays

// const personajes = ['goku','vegeta','trunks'];
// const [ , ,p3 ] = personajes
// console.log( p3) ; 


// //fusion de fecla 
// const retornaArreglo = ( ) =>{
//     return ['ABC, 123'];
// }

// const [letras, numeros ] = retornaArreglo();
// console.log(letras, numeros );

//tarea
const dragon = ( valor ) =>{
    return [valor, () => { console.log('hola mundo');}]
}

//destructiring
const [ nombre, setNombre] = dragon ('goku');

console.log(nombre);
setNombre();        