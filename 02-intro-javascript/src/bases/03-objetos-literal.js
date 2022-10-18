//objetos literales

const persona = {
    nombre: 'Tony',
    apeliido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Buenos Aires',
        zip: 3424234,
        lat:14.32342,
        lng: 34315623,
    }
};

console.log( persona );

// S Opetator
const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log(persona2);