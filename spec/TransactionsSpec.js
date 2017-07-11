describe("Transaction", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should start with 0 transactions", function() {
    expect(transaction.history).toEqual([]);
  });

  it("should update when a account deposit is made", function() {
    account.deposit(1000);
    account.deposit(1000);
    expect(transaction.history).toEqual([1000,1000])
  })

  it("should update when a account withdrawal is made", function() {
    account.withdraw(1000);
    account.withdraw(1000);
    expect(transaction.history).toEqual([-1000, -1000])
  })

});
