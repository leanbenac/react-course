// funciones en JS

// const saludar = function (nombre){
//     return `Hola, ${ nombre }`;
// }

const saludar2 = (nombre) =>{ return `Hola, ${ nombre }`;}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

console.log( saludar2 ('Vegeta'));
console.log( saludar3 ('Goku'));
console.log( saludar4 ());


const getUser = () =>({
    uid: 'ABC123',
    username: 'leo_8840'
});

const user = getUser();
console.log( user);

// tarea

const getUsuarioActivo = (nombre) => ({
    
        uid: 'ABC567',
        username: nombre
    
})

const usuarioActivo = getUsuarioActivo ('leandro_7');
console.log( usuarioActivo );
