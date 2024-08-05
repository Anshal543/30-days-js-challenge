// N Queens

const solveNQueens = (n) => {
    const board = Array.from(Array(n), () => Array(n).fill('.'));
    const solutions = [];

    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    const solve = (row) => {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.';
            }
        }
    }

    solve(0);
    return solutions;
}

const n = 4;
const result = solveNQueens(n);
console.log(`The solutions for ${n} queens are: `);
result.forEach((solution, index) => {
    console.log(`Solution ${index + 1}: `);
    solution.forEach(row => console.log(row));
});