// desestructuring  // asignacion desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'soldado'
};

// const { nombre , edad, clave   } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const guerrero = ({nombre,edad, clave, rango = 'Capitan'}) => {
    
    // console.log(nombre, edad, clave, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.234,
            lng:12.343
        }
    }
}

//traigo los datos que quiero // destructuring
const {nombreClave, anios, latlng:{lat, lng}} = guerrero(persona);

console.log(nombreClave, anios);
console.log(lat, lng);