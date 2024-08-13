let imgDice1 = document.querySelector('#imgDice1');
let imgDice2 = document.querySelector('#imgDice2');
let title = document.querySelector('.title');

addEventListener('DOMContentLoaded', () => {
    getImg();
});

// get image folder
let getImg = () => {
    let folder = './images';
    const numero = generarNumeroAleatorio();
    const numero2 = generarNumeroAleatorio();

    let imgFiles = `${folder}/dice${numero}.png`;
    let imgFiles2 = `${folder}/dice${numero2}.png`;
   
    imgDice1.src = imgFiles;
    imgDice2.src = imgFiles2;

    playerWinner(numero, numero2);
}

let playerWinner = (num1, num2) => {
    if (num1 == num2) {
        title.textContent = "Draw";
    } else {
        title.textContent = (num1 > num2) ? "Player 1 Winner" : "Player 2 Winner";
    }
}

// random number 
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}
