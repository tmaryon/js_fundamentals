const starWarsData = [
    
{   name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male'},

{   name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a', skin_color: 'gold', eye_color: 'yellow', birth_year: '112BBY', gender: 'n/a'},

{   name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a', skin_color: 'white, blue', eye_color: 'red', birth_year: '33BBY', gender: 'n/a'},
{   name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none', skin_color: 'white', eye_color: 'yellow', birth_year: '41.9BBY', gender: 'male'},

{   name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown', skin_color: 'light', eye_color: 'brown', birth_year: '19BBY', gender: 'female'} ,
    
{   name: 'Pex Kylar',
    height: '180',
    mass: '190',
    hair_color: 'orange', skin_color: 'brown', eye_color: 'none', birth_year: '27BBY',gender: 'n/a'}
];



let biggerThanLuke = (arr) => {
    // return only names with a mass > Luke (77)
    return arr.filter(person => person.mass > 77)
    // implied return of names remaning in person 
    // 'Darth Vader', 'Pex Kylar'
    .map((person) => person.name) // single-line ES6 function
    .join(' - ') // join names as a string with ' - ' in between
} 


// test
console.log(biggerThanLuke(starWarsData));











// TEST: console.log() result of biggerThanLuke()
// console.log(biggerThanLuke(starWarsData));

// const stuff = [
//     {name: 'Sweatshirt', price: 45},
//     {name: 'Bookmark', price: 2.50},
//     {name: 'Tote Bag', price: 15}
// ]


// const sortBy = (prop, arr) => {
//     const test = prop
//     console.log(test)
//     return arr.sort((a, b) => a.test - b.test)
// }
// console.log(sortBy('price', stuff))