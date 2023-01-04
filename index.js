const names = [];
const party = [];
const messages = [];

function writeCards(names, event){
    names.push(names);
    party.push(event);
    for(let i = 0; i < names.length - 1; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${party} gift!`);
    }
    //console.log(messages);
    return messages;
}

//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(counter){
    let i = counter;
    while (i >= 0){
        console.log(i--);
    }
}