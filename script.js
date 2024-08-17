let board = [
    Array(3).fill(-1),
    Array(3).fill(-1),
    Array(3).fill(-1)
];

(function() {
function checkRows(board) {
    for (let i = 0; i < 3; i++) {
        const row = board[i];
        let allEqual = row.every(val => val === row[0]);
        if (allEqual) {
            return true;
        }
    }
}

function checkCols(board) {
    for (let i = 0; i < 3; i++) {
        const col = [board[0][i], board[1][i], board[2][i]];
        let allEqual = col.every(val => val === col[0]);
        if (allEqual) {
            return true;

        }
       
    }
    return false;
}

function checkDiagonals(board) {
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] || 
        board[0][2] === board[1][1] && board[1][1] === board[2][0]) 
        return true;
}

function gameOver() {
    if(checkRows(board) || checkCols(board) || checkDiagonals(board)){
        return true;
    }
    return false;
}

})();



board = 
[['o', 'x', 'o'],
['o', 'x', 'o'],
['o', 'x', 'o']];

console.log(gameOver());
