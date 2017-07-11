describe("Transaction", function() {
  var transaction;
  var account;

  beforeEach(function() {
    transaction = new Transaction();
    account = new Account();
  });

  it("should start with 0 transactions", function() {
    expect(transaction.history).toEqual([]);
  });
});
