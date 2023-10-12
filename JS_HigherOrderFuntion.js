/* What are higher-order function
* in javascritp functions are values 
*/


let animals = [
    {name: 'fluffy', type: 'dog'},
    {name: 'jimmy', type: 'rat'},
    {name: 'marie', type: 'cat'},
    {name: 'harold', type: 'dog'},
    {name: 'ursula', type: 'cat'},
    {name: 'karo', type: 'dog'},
]

let dogs = animals.filter((animal) => {
    return animal.type === 'dog';
})

let names = animals.map((animal) => {
    return animal.name;
} )