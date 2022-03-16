// Code your solutions in this file
const names = ['Guadalupa', 'Ollie', 'Aki'];
const event = 'surprise';

function writeCards(names, suprise){
    let newArray = []
    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}

function countDown(positiveNumber){
    while (positiveNumber >= 0){
        console.log(positiveNumber);
        positiveNumber--;
    }
}