const prompt = require('prompt-sync')();


const game = (function () {
    function checkRows(board) {
        for (let i = 0; i < 3; i++) {
            const row = board[i];
            let allEqual = row.every(val => val === row[0] && row[0] !== -1);
            if (allEqual) {
                return row[0];
            }
        }
        return false;
    }

    function checkCols(board) {
        for (let i = 0; i < 3; i++) {
            const col = [board[0][i], board[1][i], board[2][i]];
            let allEqual = col.every(val => val === col[0] && col[0] !== -1);
            if (allEqual) {
                return col[0];

            }

        }
        return false;
    }

    function checkDiagonals(board) {
        if (board[0][0] !== -1 && board[0][0] === board[1][1] && board[1][1] === board[2][2] ||
            board[0][2] !== -1 && board[0][2] === board[1][1] && board[1][1] === board[2][0])
            return board[1][1];
        return false;
    }

    function checkLeftBoxes(board) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === -1)
                    return true;
            }
        }
        return false;
    }

    function winner(board) {
        let result = checkRows(board);
        if (result !== false) {
            return result;
        }

        result = checkCols(board);
        if (result !== false) {
            return result;
        }
        result = checkDiagonals(board);
        if (result !== false) {
            return result;
        }
        return false;

    }
    function tie(board) {
        return !checkLeftBoxes(board);
    }
    function gameOver(board) {
        let winnerSymbol = winner(board);
        if (winnerSymbol !== false)
            return winnerSymbol;

        if (tie(board))
            return true;

        return false;


    }

    function printBoard(board) {
        for (let i = 0; i < 3; i++) {
            let rowStr = '';
            for (let j = 0; j < 3; j++) {
                rowStr += board[i][j] + ' ';
            }
            console.log(rowStr);
        }
    }


    return {
        printBoard,
        gameOver
    };

})();



let board = [
    Array(3).fill(-1),
    Array(3).fill(-1),
    Array(3).fill(-1)
];
let name_p1 = prompt('p1 enter ur name');
let name_p2 = prompt('p2 enter ur name');

let Player = { [name_p1]: 'x', [name_p2]: 'o' };

let currPlayer = name_p1;
for (let i = 0; i < 9; i++) {

    game.printBoard(board);
    while (true) {
        let row = parseInt(prompt(`${currPlayer} enter ur row pos`));
        let col = parseInt(prompt(`${currPlayer} enter ur col pos`));
        if (board[row][col] === -1) {
            board[row][col] = Player[currPlayer];
            break;
        } else console.log("pos is already full, try again");
    }

    let result = game.gameOver(board);
    console.log(result);
    if (result=== true) {
        game.printBoard(board);
        console.log("tie");
        break;
    }
    else if (result === 'x') {
        game.printBoard(board);
        console.log(`${name_p1} is the winner`);
        break;
    }
    else if (result === 'o') {
        game.printBoard(board);
        console.log(`${name_p2} is the winner`);
        break;
    }
    currPlayer = (currPlayer === name_p1) ? name_p2 : name_p1;


}

