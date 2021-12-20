let cardValues = [];
const personInfo = document.querySelector('.person-info');
const computerInfo = document.querySelector('.computer-info');

const sumaValoresFirstPlayer = (array) => {
    let cont = 0;
    for (numero in array) {
        cont += (array[numero] + 1);
    }
    if (cont == 21) {
        console.log('Blackjack!!');
        paresCartas = [];
        cardValues = [];
        buttonAddCardPerson.disabled = true;
        buttonAddCardPerson.classList.toggle('addCardNoHover');
        buttonAddCardPerson.classList.remove('addCardHover');
        endGame.classList.toggle('endGameNoHover');
        endGame.classList.remove('endGameHover');
    } else if (cont > 21) {
        console.log('Perdiste');
        paresCartas = [];
        cardValues = [];
        endGame.disabled = true;
        buttonAddCardPerson.disabled = true;
        buttonAddCardPerson.classList.toggle('addCardNoHover');
        buttonAddCardPerson.classList.remove('addCardHover');
        endGame.classList.toggle('endGameNoHover');
        endGame.classList.remove('endGameHover');
    }
    personInfo.innerHTML = cont;
}

const sumaValoresSecondPlayer = (array) => {
    let cont = 0;
    for (numero in array) {
        cont += (array[numero] + 1);
    }
    if (cont == 21) {
        console.log('Blackjack!!');
        paresCartas = [];
        cardValues = [];
        buttonAddCardComputer.disabled = true;
        buttonAddCardComputer.classList.toggle('addCardComputerOrSecondPlayerNoHover');
        buttonAddCardComputer.classList.remove('addCardComputerOrSecondPlayerHover');
        endGameForComputerOrSecondPlayer.classList.toggle('endGameForComputerOrSecondPlayerNoHover');
        endGameForComputerOrSecondPlayer.classList.remove('endGameForComputerOrSecondPlayerHover');
    } else if (cont > 21) {
        console.log('Perdiste');
        paresCartas = [];
        cardValues = [];
        endGameForComputerOrSecondPlayer.disabled = true;
        buttonAddCardComputer.disabled = true;
        buttonAddCardComputer.classList.toggle('addCardComputerOrSecondPlayerNoHover');
        buttonAddCardComputer.classList.remove('addCardComputerOrSecondPlayerHover');
        endGameForComputerOrSecondPlayer.classList.toggle('endGameForComputerOrSecondPlayerNoHover');
        endGameForComputerOrSecondPlayer.classList.remove('endGameForComputerOrSecondPlayerHover');
    }
    computerInfo.innerText = cont;
}
