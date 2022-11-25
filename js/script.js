const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var my_dic = {
    1: 'X',
    2: '',
    3: 'O',
    4: 'X',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
}

draw = false;


var character = 'cross';
const unplayedSquares = document.querySelectorAll('.character');
allSquares = document.querySelectorAll('.ch');

function checkWin(whichPlayer) {
    return win.some(combo => {
        return combo.every(number => {
            return allSquares[number].classList.contains(whichPlayer);
        });
    });
};

function checkDraw() {
    if (checkWin('cross') == false && checkWin('nought') == false) {
        if (allSquares.forEach(square => {
            !square.classList.contains('character')
        })) {
            draw = true
        }
        return draw;
    };
}

function endGame(whichPlayer) {
    if (checkWin(whichPlayer) == true) {
        unplayedSquares.forEach(square => {
            square.classList.remove('character');
        })
    }
}


document.addEventListener('click', function addCharacter(event) {

    if (character == 'cross' && event.target.classList.contains('character')) {
        console.log(event.target);
        event.target.classList.add('cross');
        event.target.classList.remove('character');
        checkWin('cross');
        endGame('cross');
        character = 'nought';
        checkDraw();
        
    };

    if (character == 'nought' && event.target.classList.contains('character')) {
        event.target.classList.add('nought');
        event.target.classList.remove('character');
        checkWin('nought');
        endGame('nought');
        character = 'cross';

    };

});
