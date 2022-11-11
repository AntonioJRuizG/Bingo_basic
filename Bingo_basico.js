const bingoCard = [
    { number: 1, matched: false },
    { number: 2, matched: false },
    { number: 3, matched: false },
    { number: 4, matched: false },
    { number: 5, matched: false },
    //next line
  /*   { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false }, */
];


const getRandomInt = () => {
    return Math.floor(Math.random() * 5) +1;
}

const askForUsername = () => {
    const username = prompt('Username:', 'Name');
    alert(`Hello ${username}`);
}


let counterToBingo = 0;

let counterTurns = 0;
const matchCarton = () => {
    let randomNumber = getRandomInt();
    counterTurns++;
    for (let i = 0; i < bingoCard.length; i++){
        alert(`debuger: contador a bingo:${counterToBingo}, contador turnos: ${counterTurns}, i= ${i}, numero random: ${randomNumber} `)
        if (bingoCard[i].number === randomNumber && bingoCard[i].matched === true){
            alert(`${randomNumber} Number already crossed`);
            break;
        } 
        else if (bingoCard[i].number === randomNumber && bingoCard[i].matched === false){
            //bingoCard[i].number = 'X';
            bingoCard[i].matched = true;
            counterToBingo++;
            if (counterToBingo === bingoCard.length){
                alert(`BINGO!!! Score: ${counterTurns}`)
                return true
            } else {
                alert(`${randomNumber} is in the carton!`)
            }
            break;
            
        }else {
            
            
        }
        
    }
}

askForUsername();

do{
    
    let restarGame = matchCarton();
    if (restarGame === true){
        for (let i=0; i< bingoCard.length; i++ ){
            bingoCard[i].number = i + 1;
            bingoCard[i].matched = false;
        }
        counterToBingo = 0;
        counterTurns = 0;

    }
   

} while (confirm('Keep playing'));




