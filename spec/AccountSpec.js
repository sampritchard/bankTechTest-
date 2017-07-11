describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should have a starting balance of 0", function() {
    expect(account.balance).toEqual(0);
  });

  it("should allow user to deposit", function() {
    account.deposit(1000);
    expect(account.balance).toEqual(1000);
  })
});
