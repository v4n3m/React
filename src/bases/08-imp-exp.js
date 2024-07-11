import {heroes} from './data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => {
//         if (heroe.id === id) {
//             return true;
//         }
//     })
// }

const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
} //Esto hace lo mismo que el código de arriba, pero con menos líneas de código

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner == owner);
console.log(getHeroesByOwner('DC'))
