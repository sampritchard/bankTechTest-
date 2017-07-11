function Account(balance=0) {
  transaction = new Transaction();
  this.balance = balance
}

Account.prototype.deposit = function (number) {
  this.balance += number
  transaction.history.push(new Date().toDateString() + ": " + number);
};

Account.prototype.withdraw = function (number) {
  this.balance -= number
  transaction.history.push(new Date().toDateString() + ": " + (-number));
};
