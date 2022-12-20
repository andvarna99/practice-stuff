"use strict";

/**TODO:
 * write a function filterNumbers() that takes in an array of mixed data types
 * and returns an array of only the numbers type in ascending order**/

function filterNumbers(){
    let array = ["fred", true, 5,3];
    let arrayNum = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number"){
            arrayNum.push(array[i]);
        }
    }
    console.log(arrayNum.sort());
}
filterNumbers();

/**TODO:
 * Write a function, getOlder() that takes in an array of dog objects
 * and increases the value of each object's age property by 1.
 **/

function getOlder(){
    let dogs = [{
            name: "Chompers",
            breed: "Pug",
            age: 7
        },{
            name: "Freddy",
            breed: "Lab",
            age: 4
        }, {
            name: "Mr.Pig",
            breed: "Mastif",
            age: 10
        }];
    let dogsAge = [];
    for (let i = 0; i < dogs.length; i++) {
        // dogsAge.push(dogs.age([i]));
        console.log(dogsAge.push(dogs.age[i]));
    }
}
getOlder();