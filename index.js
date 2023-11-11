// Code your solution here
// function filter(collection) {
//     for (const user of collection) {
//       if (findMatching(drivers)) {
//         console.log(Drivers.firstName);
//       }
//     }
// }
// function findMatching(drivers, name){
//     return (drivers, name)
// }


//
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
 const findDriver = drivers.filter(driver => driver.toLowerCase() === 
 name.toLowerCase());
    return [...(findDriver)];
}


console.log (findMatching(drivers, 'Bobby'));

function fuzzyMatch(drivers, providedLetters){
    const providedMatch = drivers.filter(driver => driver.slice(0, 2) === 
    providedLetters);
       return [...(providedMatch)];
   }
   
   
   console.log (fuzzyMatch(drivers, 'Sa'));

    function matchName (drivers, name){
        const checkName = drivers.filter(driver => driver.name === name);
        return checkName;
        
    }

