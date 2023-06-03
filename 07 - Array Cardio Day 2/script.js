
// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

const isAdult = people.some(function(person){
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19){
        return true;
    }
});
console.table(isAdult);

//Arrow function
const isAdult2 = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.table(isAdult2);

//Arrow function
const alladults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.table(alladults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423


const comment = comments.find(function(comment){
    if(comment.id === 823423){
        return true;
    }
});
console.table(comment);

//Arrow function
const comment2 = comments.find(comment=> comment.id === 823423);
console.table(comment2);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.table(index); 

    //As this is at index so splice is used to remove the element
comments.splice(index, 1);

console.table(comments);

const newComments = [
    ...comments.slice(0, index), //Spreading the array from 0 index
    ...comments.slice(index + 1)      //to last index one by one
];
console.table(newComments);