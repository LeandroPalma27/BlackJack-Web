const cardsSectionPerson = document.querySelector('.cards_person-player');
const cardsSectionComputer = document.querySelector('.cards_computer-player');
const buttonAddCardPerson = document.getElementById('addCard');
const buttonAddCardComputer = document.getElementById('addCardComputerOrSecondPlayer');
let paresCartas = [];

buttonAddCardPerson.addEventListener('click', () => {
    const card = document.createElement('img');
    const par = [gameRandomNumberForCardNumber(), gameRandomNumberForCardType()];
    if (isRepeatCard(paresCartas, par) == false) {
        card.setAttribute('src', (cards[par[0]][par[1]]));
        card.setAttribute('class', par[0]);
        cardValues.push(par[0]);
        card.style.width = '90px';
        card.style.height = '130px';
        cardsSectionPerson.appendChild(card);
        paresCartas.push(par);
        sumaValoresFirstPlayer(cardValues);
    } else if (isRepeatCard(paresCartas, par) == true) {
        buttonAddCardPerson.click();
    }
});

buttonAddCardComputer.addEventListener('click', () => {
    const card = document.createElement('img');
    const par = [gameRandomNumberForCardNumber(), gameRandomNumberForCardType()];
    if (isRepeatCard(paresCartas, par) == false) {
        card.setAttribute('src', (cards[par[0]][par[1]]));
        card.setAttribute('class', par[0]);
        cardValues.push(par[0]);
        card.style.width = '90px';
        card.style.height = '130px';
        cardsSectionComputer.appendChild(card);
        paresCartas.push(par);
        sumaValoresSecondPlayer(cardValues);
    } else if (isRepeatCard(paresCartas, par) == true) {
        buttonAddCardComputer.click();
    }
});