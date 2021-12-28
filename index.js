// Code your solutions in this file
function writeCards(letters){
    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i]=`Thank you, ${letters[i]}, for the wonderful surprise gift!`);
    }
    return letters;
}
function countDown(n){
    while (n>=0){
        console.log(n);
        n--;
    }
}