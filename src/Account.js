function Account(balance=0) {
  this.balance = balance
}

Account.prototype.deposit = function (number) {
  this.balance += number
};
