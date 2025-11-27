
function frequenceWhile(tableau,entier){
    let compteur = 0;
    let index = 0;
    while (index < tableau.length) {
        if (entier === tableau[index]){
            compteur++
        }
        index++;
        }
    return compteur;
}


function frequenceDo(tableau,entier) {
    let compteur = 0;
    let index = 0;
    do {
        if(entier === tableau[index]) {
            compteur++
        }
        index++
    } while (index < tableau.length) ;
    return compteur;
}


function frequenceFor(tableau,entier) {
    let compteur = 0
    for (let index = 0; index < tableau.length; index++){
        if (entier === tableau[index]) {
            compteur++
        }
    }
    return compteur;
}


function frequenceForIn(tableau,entier) {
    let compteur = 0;
    for (let index in tableau){
        if(entier === tableau[index]){
        compteur++
        }
    }
    return compteur;
}


function frequenceForOf(tableau,entier) {
    let compteur = 0
    for (let element of tableau){
        if(entier === element){
        compteur++
        }
    }
    return compteur;
}


{
    console.log(frequenceWhile([1, 2, 3, 2, 2], 2));
    console.log(frequenceDo([1, 2, 3, 4, 1], 1));
    console.log(frequenceFor([1, 3, 3, 3, 3], 3));
    console.log(frequenceForIn(['a','b','c'], 'b'));
    console.log(frequenceForOf(['a','z','b','z','c'], 'z'));
}



