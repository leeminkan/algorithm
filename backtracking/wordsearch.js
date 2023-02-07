/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const backTrack = (board, word, row, col, index) => {
        if (isOutOfBox(board, {row,col})) return false;
        if (board[row][col] !== word[index]) return false;
        if (word.length - 1 === index) return true;

        board[row][col] = "*";
        
        const hasWord = [
            {
                row,
                col: col + 1
            },
            {
                row,
                col: col + -1
            },
            {
                row: row + 1,
                col
            },
            {
                row: row - 1,
                col
            },
        ].filter(next => {
            return backTrack(board, word, next.row, next.col, index + 1);
        }).length > 0;

        if (hasWord) return true;
        board[row][col] = word[index];
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (backTrack(board, word, row, col, 0)) return true;
        }
    }

    return false;
};

const isOutOfBox = (board, {row, col}) => {
    if (row < 0 || row >= board.length) return true;
    if (col < 0 || col >= board[0].length) return true;
    return false;
}

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));