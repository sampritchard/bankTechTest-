function AccountStatement() {
  this.header = "date || credit || debit || balance"
}

AccountStatement.prototype.print = function () {
  return (this.header + '\n' +
          200 + '\n' +
          200);
};
