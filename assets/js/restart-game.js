const restartArrayValues = document.getElementById('restartButton');

restartArrayValues.addEventListener('click', () => {
    cardsSectionPerson.innerHTML = '';
    cardsSectionComputer.innerHTML = '';
    buttonAddCardPerson.disabled = false;
    buttonAddCardComputer.disabled = false;
    paresCartas = [];
    cardValues = [];
    personInfo.innerHTML = '';
    computerInfo.innerHTML = '';
    endGame.disabled = false;
    endGameForComputerOrSecondPlayer.disabled = false;
    buttonAddCardComputer.disabled = false;
    buttonAddCardPerson.disabled = false;
});