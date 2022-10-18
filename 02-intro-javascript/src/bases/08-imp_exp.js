// import { heroes } from './data/heroes';
// import  heroes, { owners }  from '../data/heroes';
import heroes from '../data/heroes';
// console.log(owners);

//metodo FIND, sumar
export const getHeroeById = (id) => heroes.find ( (heroe ) => heroe.id === id );

// console.log( getHeroeById(2) );

// const getHeroeByOwner  = ( owner) => heroes.filter ( (heroe ) => heroe.owner === owner);

// console.log(getHeroeByOwner ('Marvel') ); 