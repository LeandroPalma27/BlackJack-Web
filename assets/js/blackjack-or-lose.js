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
    } else if (cont > 21) {
        console.log('Perdiste');
        paresCartas = [];
        cardValues = [];
        endGame.disabled = true;
        buttonAddCardPerson.disabled = true;
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
    } else if (cont > 21) {
        console.log('Perdiste');
        paresCartas = [];
        cardValues = [];
        endGameForComputerOrSecondPlayer.disabled = true;
        buttonAddCardComputer.disabled = true;
    }
    computerInfo.innerText = cont;
}
