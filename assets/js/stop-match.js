const endGame = document.getElementById('endGame');
const endGameForComputerOrSecondPlayer = document.getElementById('endGameForComputerOrSecondPlayer');
let valuesPlayers = [];

endGame.addEventListener('click', () => {
    console.log('Partida terminada, suerte!!');
    cardValues = [];
    paresCartas = [];
    valuesPlayers.push(personInfo.innerText);
    buttonAddCardPerson.disabled = true;
    console.log(valuesPlayers);
});

endGameForComputerOrSecondPlayer.addEventListener('click', () => {
    console.log('Partida terminada, suerte!!');
    cardValues = [];
    paresCartas = [];
    valuesPlayers.push(computerInfo.innerText);
    buttonAddCardComputer.disabled = true;
    console.log(valuesPlayers);
});
