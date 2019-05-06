const inventors = [
    {
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Steve',
        last: 'Jobs',
        year: 1945,
        passed: 2015
    }
];


const people = [ 
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Llyod',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berlie, Milton',
    'Berlin Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrel, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'BLair, Tony',
    'Blake, William'

];

// Array.prototype.filter()
//1. Filter the list of inventors for those who wee born in the 1500's


// Example 1st
    // const fifteen = inventors.filter(function(inventor){
    //     if(inventor.year >= 1500 && inventor.year <= 1599){
    //       return true;      // keeep it
    //     }   
    // })


const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);


// Array.prototype.map()
//2. Give us ab array of the inventory first and last names 

// 1st sample
// const fullNames = inventors.map(inventor => inventor.first + inventor.last);
// console.log(fullNames);   
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);            


// Array.prototype.sort()
// Example 1 Array.prototype.sort()
// const ordered = investors.sort(function(a,b){
//     if(a.year > b.year){
//         return 1;
//     } else {
//         return -1;
//     }
// })

const ordered = inventors.sort((a,b) => a.year > b.year ? 1:-1);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

//   old sample code
// var totalYears = 0
// for(var i = 0; i < inventor.length; i++){
//     totalYears += inventors[i].year
// }
// console.log(totalYears);

const totalYears = inventors.reduce((total, inventor) => {
return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//5. Sort the inventors by years lived
const oldest = inventors.sort(function(a,b) {
const lastGuy = a.passed - a.year;
const nextGuy = b.passed - b.year;
return lastGuy > nextGuy ? -1: 1;
})
console.table(oldest);

//6. create a list of Boulevards in Paris that contain 'de' anywhere in the name 
// https://en-wikepedia.org/wiki/Category:Boulevards_in_Paris

//   1st example   
// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];

// const de = links.map(link => link.textContent);

const category = document.querySelector('.mw-category');
const link = Array.from(category.querySelectorAll('a'));

const de = links
        .map(link => link.textContent)
        .filter(streetName => streetName.include('de'));


// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort(function(lastOne, nextOne) {
const [aLast, aFirst] = lastOne.split(', ');
const [bLast, bFirst] = nextOne.split(', ');

return aLast > bLast ? -1: 1;
});
console.table(alpha)

//8. Reduce Exercise
// Sum up the instances of each of these     
const data = [
'car',
'cat',
'truck',
'bike',
'walk',
'car',
'van',
'bike',
'walk',
'car',
'van',
'car',
'truck',
'pogo-stick'
]

const transportation = data.reduce(function(obj,item) {
if(!obj[item]) {
   obj[item] = 0;
}
obj[item]++;
return obj;
}, {});
console.table(transportation);

//Exam javascript 1
//    const solution = A.sort((a,b) => 
//         a.Array > b.Array ? -1 : 1);
//         console.table(solution)
//         const solution = A.sort(function(a,b){
//         const lastGuy = a.passed - a.year;
//         const nextGuy = b.passed - b.year;
//         return lastGuy > nextGuy ? -1 : 1;

//   });

//Exam javascript 3
const N = [
{
Array: '1'
},
{
Array: '0'
},
{
Array: '-3'
},
{
Array: '2'   
}
]

const answer = N.sort((A,b ) => 
1 <= A.Array <= b.Array <= 100 );
console.table(answer)

//Exam javascript 2
const info = [
{
Array: '7'
},
{
Array: '21'
},
{
Array: '3'
},
{
Array: '42'   
},
{
Array: '3'   
},
{
 Array: '7'  
}

]


const solution = info.sort((a,b) => 
a.Array - b.Array ? 1 : -1);
console.table(solution)

//    const solution = info.sort(function(A,A){
//         const difference = A.Array - A.Array;

//         return difference ? 1 : -1;
//    });    
//    console.table(solution);
//         const solution = A.sort(function(a,b){
//         const lastGuy = a.passed - a.year;
//         const nextGuy = b.passed - b.year;
//         return lastGuy > nextGuy ? -1 : 1;

//   });