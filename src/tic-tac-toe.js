class TicTacToe {
  constructor() {
    this.field = [[null, null, null], [null, null, null], [null, null, null]];
    this.currentPlayer = "x";
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.field[rowIndex][columnIndex]) {
      this.field[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
    }
  }

  isFinished() {
    return Boolean(this.getWinner() || this.isDraw());
  }

  checkForWin(player) {
    const buffers = [];

    for (let i = 0; i < this.field.length; i++) {
      const horizontal = [];
      const vertical = [];
      for (let j = 0; j < this.field.length; j++) {
        horizontal.push(this.field[i][j]);
        vertical.push(this.field[j][i]);
      }
      buffers.push(horizontal, vertical);
    }

    const leftDiagonal = [];
    const rightDiagonal = [];
    for (let i = 0; i < this.field.length; i++) {
      leftDiagonal.push(this.field[i][i]);
      rightDiagonal.push(this.field[i][this.field.length - i - 1]);
    }
    buffers.push(leftDiagonal, rightDiagonal);

    return buffers.some(line => line.every(value => value === player));
  }

  getWinner() {
    if (this.checkForWin("x")) return "x";
    if (this.checkForWin("o")) return "o";
    return null;
  }

  noMoreTurns() {
    return this.field.every(line => line.every(value => Boolean(value)));
  }

  isDraw() {
    return Boolean(this.noMoreTurns() && !this.getWinner());
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
