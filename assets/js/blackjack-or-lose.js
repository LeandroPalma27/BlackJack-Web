let cardValues = [];
const personInfo = document.querySelector('.person-info');
const computerInfo = document.querySelector('.computer-info');

const sumaValoresFirstPlayer = (array) => {
    let cont = 0;
    for (numero in array) {
        cont += (array[numero] + 1);
    }
    if (cont == 21) {
        paresCartas = [];
        cardValues = [];
        buttonAddCardPerson.disabled = true;
        buttonAddCardPerson.classList.toggle('addCardNoHover');
        buttonAddCardPerson.classList.remove('addCardHover');
        endGame.classList.toggle('endGameNoHover');
        endGame.classList.remove('endGameHover');
        winDrawOrLoseForAutomate(cont);
    } else if (cont > 21) {
        paresCartas = [];
        cardValues = [];
        endGame.disabled = true;
        buttonAddCardPerson.disabled = true;
        buttonAddCardPerson.classList.toggle('addCardNoHover');
        buttonAddCardPerson.classList.remove('addCardHover');
        endGame.classList.toggle('endGameNoHover');
        endGame.classList.remove('endGameHover');
        winDrawOrLoseForAutomate(cont);
    }
    personInfo.innerHTML = cont;
}

const sumaValoresSecondPlayer = (array) => {
    let cont = 0;
    for (numero in array) {
        cont += (array[numero] + 1);
    }
    if (cont == 21) {
        paresCartas = [];
        cardValues = [];
        buttonAddCardComputer.disabled = true;
        buttonAddCardComputer.classList.toggle('addCardComputerOrSecondPlayerNoHover');
        buttonAddCardComputer.classList.remove('addCardComputerOrSecondPlayerHover');
        endGameForComputerOrSecondPlayer.classList.toggle('endGameForComputerOrSecondPlayerNoHover');
        endGameForComputerOrSecondPlayer.classList.remove('endGameForComputerOrSecondPlayerHover');
        winDrawOrLoseForAutomate(cont);
    } else if (cont > 21) {
        paresCartas = [];
        cardValues = [];
        endGameForComputerOrSecondPlayer.disabled = true;
        buttonAddCardComputer.disabled = true;
        buttonAddCardComputer.classList.toggle('addCardComputerOrSecondPlayerNoHover');
        buttonAddCardComputer.classList.remove('addCardComputerOrSecondPlayerHover');
        endGameForComputerOrSecondPlayer.classList.toggle('endGameForComputerOrSecondPlayerNoHover');
        endGameForComputerOrSecondPlayer.classList.remove('endGameForComputerOrSecondPlayerHover');
        winDrawOrLoseForAutomate(cont);
    }
    computerInfo.innerText = cont;
}
