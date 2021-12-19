const isRepeatCard = (array, par) => {
    let isRepeat = false;
    for (let i = 0; i < array.length; i++) {
        if(array[i].join() == par.join()){
            isRepeat = true;
        } else {
        }
    }
    return isRepeat;
}