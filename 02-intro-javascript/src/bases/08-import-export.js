import {heroes,owner} from '../data/heroes'

// console.log(owner)

const getHeroeById = (id)=> {
    return heroes.find(element => element.id===id)
}
// console.log(getHeroeById(3));

//find, filter 
const getHeroeByOwner = (owner) => heroes.filter( (element) => element.owner === owner)

// console.log(getHeroeByOwner('Marvel'))

// console.log(getHeroeByOwner('DC'))

export {
    getHeroeById,getHeroeByOwner
}