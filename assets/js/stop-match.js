const endGame = document.getElementById('endGame');
const endGameForComputerOrSecondPlayer = document.getElementById('endGameForComputerOrSecondPlayer');
let valuesPlayers = [];

endGame.addEventListener('click', () => {
    console.log('Partida terminada, suerte!!');
    cardValues = [];
    paresCartas = [];
    valuesPlayers.push(personInfo.innerText);
    buttonAddCardPerson.disabled = true;
    endGame.disabled = true;
    buttonAddCardPerson.classList.toggle('addCardNoHover');
    buttonAddCardPerson.classList.remove('addCardHover');
    endGame.classList.toggle('endGameNoHover');
    endGame.classList.remove('endGameHover');
});

endGameForComputerOrSecondPlayer.addEventListener('click', () => {
    console.log('Partida terminada, suerte!!');
    cardValues = [];
    paresCartas = [];
    valuesPlayers.push(computerInfo.innerText);
    buttonAddCardComputer.disabled = true;
    endGameForComputerOrSecondPlayer.disabled = true;
    buttonAddCardComputer.classList.toggle('addCardComputerOrSecondPlayerNoHover');
    buttonAddCardComputer.classList.remove('addCardComputerOrSecondPlayerHover');
    endGameForComputerOrSecondPlayer.classList.toggle('endGameForComputerOrSecondPlayerNoHover');
    endGameForComputerOrSecondPlayer.classList.remove('endGameForComputerOrSecondPlayerHover');
    winDrawOrLose(valuesPlayers);
});
