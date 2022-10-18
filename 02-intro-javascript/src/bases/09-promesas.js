import { getHeroeById } from './bases/08-imp_exp';

// eslint-disable-next-line
//  // las promesas sn asincronas 
// const promesa = new Promise( (resolve, reject) => {
// //collback
//     setTimeout ( () => {

//         const p1 = getHeroeById (2);
//         resolve (p1);

// }, 2000)

// }); 


// promesa.then ( ( heroe ) => {
//     console.log('heroe', heroe);
// });

// promesa.catch( err => console.warn ( err ) );

const getHeroeByIdAsync = (id) => {


    return new Promise( (resolve, reject) => {

        setTimeout ( () => {
            const p1 = getHeroeById (id);
            if (p1){
                resolve(p1);
            }else
                reject('no se encuentra heroe');
        }, 2000)

    }); 


}

getHeroeByIdAsync(3)
    .then(console.log) 
    .catch (console.warn)