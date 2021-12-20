const winDrawOrLoseForAutomate = (result) => {
    if (result == 21) {
        console.log('blackjack');
    } else if (result > 21) {
        console.log('perdiste');
    }
};

const winDrawOrLose = (results) => {
    let resultados = results.map((e) => parseInt(e, 10));
    if (resultados[0] > resultados[1]) {
        console.log('Gana jugador 1');
    } else {
        console.log('Gana jugador 2');
    }
}

/* if (valuesPlayers.length == 2) {
    winDrawOrLose(valuesPlayers);
    console.log('funciona');
} */