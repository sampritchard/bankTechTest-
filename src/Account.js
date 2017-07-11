function Account(balance=0) {
  this.balance = balance
}

Account.prototype.deposit = function (number) {
  this.balance += number
};

Account.prototype.withdraw = function (number) {
  this.balance -= number
};
