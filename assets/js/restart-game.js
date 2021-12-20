const restartArrayValues = document.getElementById('restartButton');

restartArrayValues.addEventListener('click', () => {
    cardsSectionPerson.innerHTML = '';
    cardsSectionComputer.innerHTML = '';
    buttonAddCardPerson.disabled = false;
    buttonAddCardComputer.disabled = false;
    paresCartas = [];
    cardValues = [];
    valuesPlayers = [];
    personInfo.innerHTML = '';
    computerInfo.innerHTML = '';
    endGame.disabled = false;
    endGameForComputerOrSecondPlayer.disabled = false;
    buttonAddCardComputer.disabled = false;
    buttonAddCardPerson.disabled = false;
    if (buttonAddCardPerson.matches('.addCardHover') == false) {
        buttonAddCardPerson.classList.add('addCardHover');
        buttonAddCardPerson.classList.toggle('addCardNoHover');
        endGame.classList.toggle('endGameNoHover');
        endGame.classList.add('endGameHover');
    }
    if (buttonAddCardComputer.matches('.addCardComputerOrSecondPlayerHover') == false) {
        buttonAddCardComputer.classList.toggle('addCardComputerOrSecondPlayerNoHover');
        buttonAddCardComputer.classList.add('addCardComputerOrSecondPlayerHover');
        endGameForComputerOrSecondPlayer.classList.toggle('endGameForComputerOrSecondPlayerNoHover');
        endGameForComputerOrSecondPlayer.classList.add('endGameForComputerOrSecondPlayerHover');
    }
});