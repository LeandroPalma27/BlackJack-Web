/* const gameRandomNumberForCardNumber = () => {
    return Math.trunc(randomDecimalZero_One * (13));
}

const gameRandomNumberForCardType = () => {
    return Math.trunc(randomDecimalZero_One * (4));
} */

const gameRandomNumberForCardNumber = () => {
    let randomDecimalZero_One = Math.random();
    return Math.trunc(randomDecimalZero_One * (13));
}

const gameRandomNumberForCardType = () => {
    let randomDecimalZero_One = Math.random();
    return Math.trunc(randomDecimalZero_One * (4));
}

const gameRandomNumber = (min, max) => {
    return Math.trunc(Math.random() * (max - min) + min);
}
